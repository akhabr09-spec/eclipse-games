class GameMonetizeWrapper {

    constructor(readyCallback) {
        this.cacheProductsData = "[]";
        this.cachePaymentsData = "[]";
        this.jsonContainers = runtimeData.prefsContainerTags || [];
        this.cacheContainers = {};
        this.flags = {};
        this.playerLogin = false;

        console.log("[gamemonetize] Wrapper initialization started.");

        try {
            window.SDK_OPTIONS = window.SDK_OPTIONS || {};
            window.SDK_OPTIONS.gameId = runtimeData.gamemonetizeId || "aujaqhwwcs47cnkt84sx17flp1tcn5cg";
            window.SDK_OPTIONS.onEvent = (event) => {
                console.log("[gamemonetize] SDK event:", event.name);
                switch (event.name) {
                    case "SDK_GAME_PAUSE":
                        document.querySelector("#unity-canvas").style.display = "none";
                        break;
                    case "SDK_GAME_START":
                        document.querySelector("#unity-canvas").style.display = "block";
                        break;
                }
            };

            let script = document.createElement("script");
            script.src = "https://api.gamemonetize.com/sdk.js";
            script.onload = () => {
                console.log("[gamemonetize] SDK loaded.");
                this.playerLogin = false;
                readyCallback();
            };
            script.onerror = () => {
                console.error("[gamemonetize] SDK load failed, continuing anyway.");
                readyCallback();
            };
            document.body.appendChild(script);
        }
        catch (e) {
            console.error("[gamemonetize] Init failed.", e);
            readyCallback();
        }
    }

    resolvePlayer() {
        return Promise.resolve({
            getMode: () => "lite",
            getData: (keys) => {
                let out = {};
                (keys || []).forEach(k => {
                    const cached = localStorage.getItem("gm_" + k);
                    out[k] = cached || null;
                });
                return Promise.resolve(out);
            },
            setData: (data) => {
                if (data) {
                    Object.keys(data).forEach(k => {
                        if (data[k] != null) localStorage.setItem("gm_" + k, JSON.stringify(data[k]));
                    });
                }
                return Promise.resolve();
            },
            getName: () => "Player",
            getPhoto: () => "",
            getUniqueID: () => "gamemonetize-player",
            uniqueId: "gamemonetize-player",
        });
    }

    resolveLanguage() {
        return (navigator.language || "en").substring(0, 2);
    }

    gameIsReady() {
        console.log("[gamemonetize] Game is ready.");
    }

    gameplayStart() {}
    gameplayStop() {}
    resolvePayments() { return Promise.resolve(); }
    invokePurchase(tag) { return Promise.resolve(tag); }
    resolveServerProducts() { return Promise.resolve([]); }
    resolveServerPurchases() { return Promise.resolve([]); }
    resolveCacheProducts() { return this.cacheProductsData; }
    resolveCachePurchases() { return this.cachePaymentsData; }
    resolveSaves() { return this.resolvePlayer(); }
    writeSaves() { return Promise.resolve(); }
    resolveCacheSaves(tag) { return this.cacheContainers[tag] || "Empty"; }
    writeCacheSaves(tag, json) {
        try { this.cacheContainers[tag] = json; localStorage.setItem("gm_" + tag, json); } catch (e) {}
    }
    resolveLeaderboards() { return Promise.resolve({}); }
    getScore(scoreTag) {}
    setScore(scoreTag, scoreValue) {}
    getScoreTable() {}
    invokePlayerLogin() {}
    requestGameRating() {}
    resolveFlags() { return Promise.resolve({}); }
    flagsGetValue(key) { return this.flags[key]; }
    flagsHasKey(key) { return this.flags[key] != null; }
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
