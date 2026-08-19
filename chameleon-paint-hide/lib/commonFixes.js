if (typeof window.yandexGamesWrapper === 'undefined') {
    var _gmCache = {};
    window.yandexGamesWrapper = {
        gameIsReady: function() {},
        getScoreTable: function() { if (typeof application !== 'undefined') application.publishEvent("ScoreTablePlatformEvent", "[]"); },
        invokeInterstitial: function() { return Promise.resolve(); },
        invokePurchase: function() { return Promise.reject("No purchases"); },
        invokeRewarded: function() { return Promise.resolve(); },
        isInterstitialVisible: function() { return false; },
        isRewardedVisible: function() { return false; },
        resolveCacheProducts: function() { return "[]"; },
        resolveCachePurchases: function() { return "[]"; },
        resolveCacheSaves: function(tag) { return _gmCache[tag] || "Empty"; },
        resolveLanguage: function() { try { return document.documentElement.lang || "en"; } catch(e) { return "en"; } },
        resolveServerPurchases: function() { return Promise.resolve([]); },
        setScore: function() {},
        writeCacheSaves: function(tag, json) { _gmCache[tag] = json; },
        writeSaves: function() { return Promise.resolve(); }
    };
}

// Disable unwanted page scroll.
window.addEventListener("wheel", (event) => event.preventDefault(), {
    passive: false,
});

// Disable unwanted key events.
window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
    }
});

// This is a fix for handling visibility change
// on webview, it�s for an issue reported for Samsung App.
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState) {
        if (document.visibilityState === "hidden") {
            application.publishEvent("OnWebDocumentPause", "True");
        }
        else if (document.visibilityState === "visible") {
            application.publishEvent("OnWebDocumentPause", "False");
        }
    }
});

// Disable context menu appearing after right click outside of the unity canvas.
document.addEventListener('contextmenu', (event) => event.preventDefault());