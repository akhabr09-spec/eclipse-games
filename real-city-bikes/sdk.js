(() => {
    "use strict";

    const queryParam = (name) => {
        try {
            const m = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
            return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
        } catch (e) {
            return "";
        }
    };

    const log = (...args) => {
        try {
            console.log(
                "%cPOKI-STUB:%c",
                "background:#4b5563;color:#fff;padding:1px 5px;border-radius:3px",
                "",
                ...args
            );
        } catch (e) { }
    };

    const noop = () => { };
    const resolved = (value) => Promise.resolve(value);
    const rejected = (message) => Promise.reject(new Error(message));

    function isDraftMode() {
        try {
            const params = new URLSearchParams(window.location.search);
            const draft = params.get("draft");
            return draft === "true" || draft === "1";
        } catch (e) {
            return false;
        }
    }



    async function callCommercialBreak(onStart) {
        log("commercialBreak()");

        if (isDraftMode()) {

            console.warn("POKI-STUB commercialBreak failed", e);
            return;

        }
        else {

            try {
                if (typeof window.commercialBreak === "function") {
                    const result = window.commercialBreak(onStart);
                    await Promise.resolve(result);
                    return;
                }

                if (typeof onStart === "function") {
                    try { onStart(); } catch (e) { }
                }
                return;
            } catch (e) {
                console.warn("POKI-STUB commercialBreak failed", e);
                return;
            }
        }
        
    }

    async function callRewardedBreak(arg) {
        log("rewardedBreak()");
        try {
            if (typeof window.rewardedBreak === "function") {
                const result = window.rewardedBreak(arg);
                return await Promise.resolve(result).then(
                    (v) => !!v,
                    () => false
                );
            }
            return false;
        } catch (e) {
            console.warn("POKI-STUB rewardedBreak failed", e);
            return false;
        }
    }

    function displayAd(container, size, onCanDestroy, onDisplayRendered) {
        log("displayAd()", { container, size });

        try {
            if (typeof onDisplayRendered === "function") onDisplayRendered();
        } catch (e) { }

        try {
            if (typeof onCanDestroy === "function") onCanDestroy();
        } catch (e) { }
    }

    const sdk = {
        init(options = {}) {
            log("init()", options);
            window.pokiReady = true;
            window.pokiAdBlock = false;
            return resolved(true);
        },

        initWithVideoHB(options = {}) {
            return this.init(options);
        },

        commercialBreak(onStart) {
            return callCommercialBreak(onStart);
        },

        rewardedBreak(arg) {
            return callRewardedBreak(arg);
        },

        displayAd,
        destroyAd: noop,

        getLeaderboard() {
            return resolved([]);
        },

        shareableURL(data = {}) {
            log("shareableURL()", data);
            return rejected("shareableURL is not supported in this build");
        },

        getURLParam(name) {
            return queryParam(`gd${name}`) || queryParam(name) || "";
        },

        getLanguage() {
            if (window.ysdkLang) return window.ysdkLang;
            const lang = (navigator.language || "en").toLowerCase();
            return lang.split("-")[0];
        },

        getIsoLanguage() {
            return queryParam("iso_lang") || window.ysdkLang || undefined;
        },

        isAdBlocked() {
            return false;
        },

        getUser() {
            return rejected("getUser is not supported in this build");
        },

        getToken() {
            return rejected("getToken is not supported in this build");
        },

        login() {
            return rejected("login is not supported in this build");
        },

        generateScreenshot() {
            return rejected("generateScreenshot is not supported in this build");
        },

        measure() {
            // no-op
        },

        captureError(error) {
            console.error("POKI-STUB captureError:", error);
        },

        customEvent(noun, verb, data = {}) {
            log("customEvent()", noun, verb, data);
        },

        gameInteractive(...args) {
            log("gameInteractive()", ...args);
        },

        gameLoadingFinished(...args) {
            log("gameLoadingFinished()", ...args);
        },

        gameLoadingProgress(...args) {
            log("gameLoadingProgress()", ...args);
        },

        gameLoadingStart(...args) {
            log("gameLoadingStart()", ...args);
        },

        gameplayStart(...args) {
            log("gameplayStart()", ...args);
        },

        gameplayStop(...args) {
            log("gameplayStop()", ...args);
        },

        happyTime: noop,

        logError(error) {
            console.error("POKI-STUB logError:", error);
        },

        muteAd: noop,

        roundEnd(data = "") {
            log("roundEnd()", data);
        },

        roundStart(data = "") {
            log("roundStart()", data);
        },

        sendHighscore(...args) {
            log("sendHighscore()", ...args);
        },

        setDebug(...args) {
            log("setDebug()", ...args);
        },

        setDebugTouchOverlayController: noop,
        setLogging: noop,
        setPlayerAge: noop,
        setPlaytestCanvas: noop,
        enableEventTracking: noop,

        openExternalLink(url) {
            log("openExternalLink()", url);
            try {
                if (url) window.open(url, "_blank", "noopener,noreferrer");
            } catch (e) { }
        },

        playtestSetCanvas: noop,
        playtestCaptureHtmlOnce: noop,
        playtestCaptureHtmlForce: noop,
        playtestCaptureHtmlOn: noop,
        playtestCaptureHtmlOff: noop,
        movePill: noop,

        showLeaderboard(...args) {
            log("showLeaderboard()", ...args);
            return resolved([]);
        }
    };


    window.PokiSDK = sdk;
    window.pokiReady = true;
    window.pokiAdBlock = false;
    window.pokiMeasureBuildin = false;





    // ================= YANDEX PROMPTS: safeStorage launches / shortcut / review =================
    (function () {
        if (window.__ygPromptsStarted) return;
        window.__ygPromptsStarted = true;

        const LAUNCH_COUNT_KEY = "yg_launch_count_safe_v1";

        function ygLog(...args) {
            try {
                console.log(
                    "%cYANDEX-PROMPTS:%c",
                    "background:#16a34a;color:#fff;padding:1px 5px;border-radius:3px",
                    "",
                    ...args
                );
            } catch (e) { }
        }

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function getYsdk() {
            for (let i = 0; i < 150; i++) {
                if (window.ysdk) return window.ysdk;
                await wait(100);
            }

            if (window.YaGames && typeof window.YaGames.init === "function") {
                window.ysdk = await window.YaGames.init();
                window.ysdkReady = true;
                return window.ysdk;
            }

            throw new Error("Yandex SDK not found");
        }

        async function getSafeStorage(ysdk) {
            if (window.__ygSafeStorage) return window.__ygSafeStorage;

            if (!ysdk.getStorage) {
                throw new Error("ysdk.getStorage is not available");
            }

            window.__ygSafeStorage = await ysdk.getStorage();
            return window.__ygSafeStorage;
        }

        function readNumber(storage, key, fallback) {
            try {
                const raw = storage.getItem(key);
                const num = Number(raw);
                return Number.isFinite(num) ? num : fallback;
            } catch (e) {
                return fallback;
            }
        }

        function writeNumber(storage, key, value) {
            try {
                storage.setItem(key, String(value));
            } catch (e) {
                console.warn("[YANDEX-PROMPTS] storage setItem failed:", e);
            }
        }

        async function showShortcutPrompt(ysdk, launchCount) {
            async function attempt(source) {
                try {
                    if (!ysdk.shortcut || typeof ysdk.shortcut.canShowPrompt !== "function") {
                        ygLog("shortcut API not available");
                        return false;
                    }

                    const prompt = await ysdk.shortcut.canShowPrompt();

                    ygLog("shortcut canShowPrompt:", prompt, "source:", source);

                    if (!prompt || !prompt.canShow) {
                        ygLog("shortcut skipped. canShow:", prompt && prompt.canShow, "reason:", prompt && prompt.reason);
                        return false;
                    }

                    const result = await ysdk.shortcut.showPrompt();

                    ygLog("shortcut showPrompt result:", result, "launch:", launchCount, "source:", source);

                    return true;
                } catch (e) {
                    console.warn("[YANDEX-PROMPTS] shortcut failed:", e);
                    return false;
                }
            }

            const shownNow = await attempt("auto");

            if (shownNow) return true;

            // Иногда такие окна лучше вызываются после действия пользователя.
            // Поэтому на 3/6/9 запуске попробуем ещё раз после первого клика/тапа.
            if (!window.__ygShortcutClickRetryArmed) {
                window.__ygShortcutClickRetryArmed = true;

                const retryAfterUserAction = async function () {
                    document.removeEventListener("pointerdown", retryAfterUserAction, true);
                    document.removeEventListener("touchstart", retryAfterUserAction, true);
                    document.removeEventListener("click", retryAfterUserAction, true);

                    window.__ygShortcutClickRetryArmed = false;

                    await attempt("user-action");
                };

                document.addEventListener("pointerdown", retryAfterUserAction, true);
                document.addEventListener("touchstart", retryAfterUserAction, true);
                document.addEventListener("click", retryAfterUserAction, true);

                ygLog("shortcut retry armed: waiting for user click/tap");
            }

            return false;
        }

        async function showReviewPrompt(ysdk, launchCount) {
            try {
                if (!ysdk.feedback || typeof ysdk.feedback.canReview !== "function") {
                    ygLog("feedback API not available");
                    return false;
                }

                const review = await ysdk.feedback.canReview();
                ygLog("review canReview:", review);

                if (review && review.value) {
                    const result = await ysdk.feedback.requestReview();
                    ygLog("review requestReview result:", result, "launch:", launchCount);
                    return true;
                }

                ygLog("review skipped:", review && review.reason);
                return false;
            } catch (e) {
                console.warn("[YANDEX-PROMPTS] review failed:", e);
                return false;
            }
        }

        async function processYandexPrompts() {
            try {
                const ysdk = await getYsdk();
                const storage = await getSafeStorage(ysdk);

                const oldCount = readNumber(storage, LAUNCH_COUNT_KEY, 0);
                const launchCount = oldCount + 1;

                writeNumber(storage, LAUNCH_COUNT_KEY, launchCount);

                window.__ygLaunchCount = launchCount;

                ygLog("old launch count:", oldCount);
                ygLog("new launch count:", launchCount);

                let shortcutShown = false;

                // Каждый 3-й запуск: 3, 6, 9, 12...
                if (launchCount > 0 && launchCount % 3 === 0) {
                    shortcutShown = await showShortcutPrompt(ysdk, launchCount);
                }

                // 5-й запуск и выше.
                // Если на этом же запуске уже показали ярлык, отзыв не показываем.
                if (launchCount >= 5 && !shortcutShown) {
                    await showReviewPrompt(ysdk, launchCount);
                }
            } catch (e) {
                console.warn("[YANDEX-PROMPTS] process failed:", e);
            }
        }

        window.__ygGetPromptStatsForTest = async function () {
            const ysdk = await getYsdk();
            const storage = await getSafeStorage(ysdk);

            const count = readNumber(storage, LAUNCH_COUNT_KEY, 0);

            const result = {
                key: LAUNCH_COUNT_KEY,
                launchCount: count
            };

            console.log("[YANDEX-PROMPTS] stats:", result);
            return result;
        };

        window.__ygResetPromptsForTest = async function () {
            const ysdk = await getYsdk();
            const storage = await getSafeStorage(ysdk);

            writeNumber(storage, LAUNCH_COUNT_KEY, 0);
            window.__ygLaunchCount = 0;

            console.log("[YANDEX-PROMPTS] launch counter reset");
        };

        window.__ygSetLaunchCountForTest = async function (value) {
            const ysdk = await getYsdk();
            const storage = await getSafeStorage(ysdk);

            const num = Number(value) || 0;

            writeNumber(storage, LAUNCH_COUNT_KEY, num);
            window.__ygLaunchCount = num;

            console.log("[YANDEX-PROMPTS] launch counter set:", num);
        };

        window.__ygForceShortcutForTest = async function () {
            const ysdk = await getYsdk();
            return await showShortcutPrompt(ysdk, window.__ygLaunchCount || 0);
        };

        window.__ygForceReviewForTest = async function () {
            const ysdk = await getYsdk();
            return await showReviewPrompt(ysdk, window.__ygLaunchCount || 0);
        };

        setTimeout(processYandexPrompts, 3000);
    })();
    // ================= /YANDEX PROMPTS =================


    log("stub loaded");
})();