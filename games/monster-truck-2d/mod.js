(function () {
  "use strict";

  // ---- 1. منع تحميل سكريبت GameDistribution ----
  var origCE = document.createElement.bind(document);
  document.createElement = function (tag, opts) {
    var el = origCE(tag, opts);
    if ((tag || "").toLowerCase() === "script") {
      var desc = Object.getOwnPropertyDescriptor(
        HTMLScriptElement.prototype,
        "src"
      );
      if (desc && desc.set) {
        Object.defineProperty(el, "src", {
          get: function () {
            return "";
          },
          set: function (v) {
            if (
              v &&
              typeof v === "string" &&
              v.indexOf("gamedistribution.com") !== -1
            ) {
              console.log("[mod] Blocked GD SDK:", v);
              return;
            }
            desc.set.call(el, v || "");
          },
          configurable: true,
        });
      }
    }
    return el;
  };

  // ---- 2. حماية window.gdsdk بـ Proxy ----
  var target = {};
  var proxy = new Proxy(target, {
    set: function (t, k, v) {
      if (k === "showAd" || k === "preloadAd") {
        console.log("[mod] Blocked write to gdsdk." + k);
        return true;
      }
      if (k === "InitAds") {
        t[k] = function () {
          console.log("[mod] InitAds blocked");
        };
        return true;
      }
      t[k] = v;
      return true;
    },
    get: function (t, k) {
      if (k === "showAd") {
        return function () {
          console.log("[mod] showAd -> onResumeGame");
          if (typeof t.onResumeGame === "function") t.onResumeGame();
        };
      }
      if (k === "preloadAd") {
        return function () {
          console.log("[mod] preloadAd -> Promise.resolve");
          return Promise.resolve();
        };
      }
      return t[k];
    },
  });

  Object.defineProperty(window, "gdsdk", {
    configurable: true,
    enumerable: true,
    get: function () {
      return proxy;
    },
    set: function (val) {
      if (val && typeof val === "object") {
        for (var key in val) {
          if (val.hasOwnProperty(key)) proxy[key] = val[key];
        }
      }
    },
  });

  // ---- 3. منع إعلانات Cordova MyAdPlugin ----
  window.cordova = window.cordova || {};
  window.cordova.plugins = window.cordova.plugins || {};
   if (!window.cordova.plugins.MyAdPlugin) {
    window.cordova.plugins.MyAdPlugin = {
      showrewarded: function () {
        console.log("[mod] MyAdPlugin.showrewarded blocked");
      },
      showRewarded: function () {},
      showInterstitial: function () {},
    };
  }

  console.log("[mod] Ad blocker loaded");
})();
