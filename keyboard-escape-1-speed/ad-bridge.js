// Ad Bridge - Connects game JS to native ad SDK
window.CordovaAds = {
  interstitial: {
    show: function() {
      cordova.exec(
        function() { console.log('Interstitial shown'); },
        function(e) { console.error('Interstitial error:', e); },
        'MyAdPlugin', 'showInterstitial', []
      );
    },
    isReady: function(callback) {
      cordova.exec(callback, function() {}, 'MyAdPlugin', 'isInterstitialReady', []);
    }
  },
  rewarded: {
    show: function(callback) {
      cordova.exec(
        function(result) { callback(true, result); },
        function(e) { callback(false, e); },
        'MyAdPlugin', 'showRewarded', []
      );
    },
    isReady: function(callback) {
      cordova.exec(callback, function() {}, 'MyAdPlugin', 'isRewardedReady', []);
    }
  },
  banner: {
    show: function() {
      cordova.exec(
        function() { console.log('Banner shown'); },
        function(e) { console.error('Banner error:', e); },
        'MyAdPlugin', 'showBanner', []
      );
    },
    hide: function() {
      cordova.exec(
        function() { console.log('Banner hidden'); },
        function(e) { console.error('Banner hide error:', e); },
        'MyAdPlugin', 'hideBanner', []
      );
    }
  }
};