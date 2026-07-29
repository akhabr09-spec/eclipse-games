(function () {
  "use strict";

  // ---- منع إعلانات GameDistribution ----
  window.gdsdk = {
    showAd: function () {
      console.log("[mod] showAd blocked");
    },
  };
  // ---- منع إعلانات Cordova MyAdPlugin ----
  window.cordova = window.cordova || {};
  window.cordova.plugins = window.cordova.plugins || {};
  window.cordova.plugins.MyAdPlugin = {
    showrewarded: function () {
      console.log("[mod] MyAdPlugin.showrewarded blocked");
    },
    showRewarded: function () {},
    showInterstitial: function () {},
  };

  console.log("[mod] Ad blocker loaded");
})();
