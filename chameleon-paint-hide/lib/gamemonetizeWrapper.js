class GameMonetizeWrapper {

    constructor(readyCallback) {
        this.wrapperSDK = null;
        this.interstitialVisible = false;
        this.rewardedVisible = false;
        this.cacheProductsData = "[]";
        this.cachePaymentsData = "[]";
        this.jsonContainers = runtimeData.prefsContainerTags || [];
        this.cacheContainers = {};
        this.flags = {};
        this.leaderboards = {};
        this.playerLogin = false;

        // Ad lifecycle callbacks — set by invokeInterstitial/invokeRewarded, consumed by onEvent
        this._onAdPause = null;
        this._onAdResume = null;

        console.log("[gamemonetize] Wrapper initialization started.");

        try {
            let script = document.createElement("script");
            script.src = "https://api.gamemonetize.com/sdk.js";
            script.onload = () => {
                window.SDK_OPTIONS = window.SDK_OPTIONS || {};
                window.SDK_OPTIONS.gameId = runtimeData.gamemonetizeId || "aujaqhwwcs47cnkt84sx17flp1tcn5cg";
                window.SDK_OPTIONS.onEvent = (event) => {
                    console.log("[gamemonetize] SDK event:", event.name);
                    switch (event.name) {
                        case "SDK_GAME_PAUSE":
                            document.querySelector("#unity-canvas").style.display = "none";
                            if (this._onAdPause) this._onAdPause();
                            break;
                        case "SDK_GAME_START":
                            document.querySelector("#unity-canvas").style.display = "block";
                            if (this._onAdResume) this._onAdResume();
                            break;
                    }
                };
                for (let i = 0; i < this.jsonContainers.length; i++) {
                    let tag = this.jsonContainers[i];
                    let cached = localStorage.getItem("gm_" + tag);
                    this.cacheContainers[tag] = cached || "Empty";
                }
                console.log("[gamemonetize] SDK loaded, options configured.");
                this.playerLogin = false;
                readyCallback();
            };
            script.onerror = () => {
                console.error("[gamemonetize] SDK load failed, continuing anyway.");
                for (let i = 0; i < this.jsonContainers.length; i++) {
                    this.cacheContainers[this.jsonContainers[i]] = "Empty";
                }
                readyCallback();
            };
            document.body.appendChild(script);
        }
        catch (e) {
            console.error("[gamemonetize] Init failed.", e);
            readyCallback();
        }
    }

    // Banner / Interstitial advertisement methods.

    isInterstitialVisible() { return this.interstitialVisible; }

    invokeInterstitial() {
        console.log("[gamemonetize] Invoke interstitial.");
        return new Promise((resolve, reject) => {
            try {
                if (typeof sdk !== "undefined" && sdk.showBanner) {
                    this.interstitialVisible = true;
                    application.publishEvent("OnInterstitialEvent", "Begin");

                    let resolved = false;
                    const done = () => {
                        if (resolved) return;
                        resolved = true;
                        this.interstitialVisible = false;
                        this._onAdPause = null;
                        this._onAdResume = null;
                        application.publishEvent("OnInterstitialEvent", "Close");
                        resolve();
                    };

                    this._onAdPause = () => {};
                    this._onAdResume = () => done();

                    sdk.showBanner();

                    // Fallback timeout
                    setTimeout(() => done(), 15000);
                } else {
                    console.warn("[gamemonetize] sdk.showBanner not available.");
                    application.publishEvent("OnInterstitialEvent", "Close");
                    resolve();
                }
            }
            catch (e) {
                console.error("[gamemonetize] Interstitial failed.", e);
                application.publishEvent("OnInterstitialEvent", "Error");
                reject(e);
            }
        });
    }

    // Rewarded advertisement methods.

    isRewardedVisible() { return this.rewardedVisible; }

    invokeRewarded() {
        console.log("[gamemonetize] Invoke rewarded.");
        return new Promise((resolve, reject) => {
            try {
                if (typeof sdk !== "undefined" && sdk.showBanner) {
                    this.rewardedVisible = true;
                    application.publishEvent("OnRewardedEvent", "Begin");

                    let resolved = false;
                    const done = () => {
                        if (resolved) return;
                        resolved = true;
                        this.rewardedVisible = false;
                        this._onAdPause = null;
                        this._onAdResume = null;
                        application.publishEvent("OnRewardedEvent", "Success");
                        application.publishEvent("OnRewardedEvent", "Close");
                        resolve();
                    };

                    this._onAdPause = () => {};
                    this._onAdResume = () => done();

                    sdk.showBanner();

                    // Fallback timeout
                    setTimeout(() => done(), 15000);
                } else {
                    console.warn("[gamemonetize] sdk.showBanner not available for rewarded.");
                    application.publishEvent("OnRewardedEvent", "Close");
                    resolve();
                }
            }
            catch (e) {
                console.error("[gamemonetize] Rewarded failed.", e);
                this.rewardedVisible = false;
                application.publishEvent("OnRewardedEvent", "Error");
                reject(e);
            }
        });
    }

    // Payments methods (stub).

    resolvePayments() { return Promise.resolve(); }
    invokePurchase(tag) { return Promise.resolve(tag); }
    resolveServerProducts() { return Promise.resolve([]); }
    resolveServerPurchases() { return Promise.resolve([]); }
    resolveCacheProducts() { return this.cacheProductsData; }
    resolveCachePurchases() { return this.cachePaymentsData; }

    // Player methods (stub).

    resolvePlayer() {
        return Promise.resolve({
            getMode: () => "lite",
            getData: (keys) => {
                let out = {};
                (keys || []).forEach(k => out[k] = null);
                return Promise.resolve(out);
            },
            setData: () => Promise.resolve(),
            getName: () => "Player",
            getPhoto: () => "",
            getUniqueID: () => "gamemonetize-player",
            uniqueId: "gamemonetize-player",
        });
    }

    // Saves methods (localStorage).

    resolveSaves() {
        return this.resolvePlayer().then(player => {
            return player.getData(this.jsonContainers).then(data => {
                for (let i = 0; i < this.jsonContainers.length; i++) {
                    let tag = this.jsonContainers[i];
                    let cached = localStorage.getItem("gm_" + tag);
                    if (cached) {
                        this.cacheContainers[tag] = cached;
                    } else {
                        this.cacheContainers[tag] = (data[tag] != null) ? data[tag] : "Empty";
                    }
                }
                application.publishEvent("OnResolveSaves", "Success");
                return data;
            });
        }).catch(e => {
            console.error("[gamemonetize] Saves resolve failed.", e);
            application.publishEvent("OnResolveSaves", "Error");
            return {};
        });
    }

    writeSaves() {
        return Promise.resolve();
    }

    resolveCacheSaves(tag) {
        let val = this.cacheContainers[tag];
        return (val != null) ? val : "Empty";
    }

    writeCacheSaves(tag, json) {
        try {
            this.cacheContainers[tag] = json;
            localStorage.setItem("gm_" + tag, json);
        }
        catch (e) {
            console.error("[gamemonetize] Cache save write failed.", e);
        }
    }

    // Language methods.

    resolveLanguage() {
        return (navigator.language || "en").substring(0, 2);
    }

    // Analytics methods.

    gameIsReady() {
        console.log("[gamemonetize] Game is ready.");
        if (typeof sdk !== "undefined") {
            try { if (sdk.gameplayStart) sdk.gameplayStart(); } catch (e) {}
        }
    }

    gameplayStart() {
        console.log("[gamemonetize] Gameplay start.");
        if (typeof sdk !== "undefined" && sdk.gameplayStart) {
            try { sdk.gameplayStart(); } catch (e) {}
        }
    }

    gameplayStop() {
        console.log("[gamemonetize] Gameplay stop.");
        if (typeof sdk !== "undefined" && sdk.gameplayStop) {
            try { sdk.gameplayStop(); } catch (e) {}
        }
    }

    // Leaderboards (stub).

    resolveLeaderboards() { return Promise.resolve({}); }
    getScore(scoreTag) { application.publishEvent("ScorePlatformEvent", "0"); }
    setScore(scoreTag, scoreValue) {}
    getScoreTable(scoreTag, leadingPlayers, includePlayer, playersAround) {
        application.publishEvent("ScoreTablePlatformEvent", "[]");
    }

    // Social / login (stub).

    invokePlayerLogin() {
        application.publishEvent("LoginPlatformEvent", "Error");
    }

    // Rating (stub).

    requestGameRating() {}

    // Flags (stub).

    resolveFlags() { return Promise.resolve({}); }
    flagsGetValue(key) { return this.flags[key]; }
    flagsHasKey(key) { return this.flags[key] != null; }

    // Banner methods.

    invokeBanner() { return Promise.resolve(); }
    disableBanner() { return Promise.resolve(); }
    refreshBannerStatus() { return Promise.resolve(false); }
    isBannerVisible() { return false; }
}

function initializeWrapper() {
    if (typeof window !== "undefined") {
        window.yandexGamesWrapper = new GameMonetizeWrapper(() => {
            application.initialize();
        });
    }
}
