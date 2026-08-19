(function () {
  if (window.YaGames) { console.log('[sdk-stub] YaGames already exists, skipping'); return; }
  class YaGames {
    static init() {
      console.log('[sdk-stub] YaGames.init called');
      return Promise.resolve({
        environment: { i18n: { lang: (navigator.language || 'en').substring(0, 2) } },
        deviceInfo: { type: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop' },
        features: {
          LoadRemoteConfig: () => Promise.resolve({ get: () => ({}), getAsString: () => '' }),
          LoadingAPI: { ready: function() {} },
        },
        adv: {
          getBannerAdvStatus: () => Promise.resolve({ stickyAdvIsShowing: false, reason: null }),
          showFullscreenAdv: function(callbacks) {
            console.log('[sdk-stub] showFullscreenAdv called');
            if (typeof sdk !== 'undefined' && sdk.showBanner) {
              if (callbacks && callbacks.onOpen) callbacks.onOpen();
              sdk.showBanner();
              setTimeout(function() {
                if (callbacks && callbacks.onClose) callbacks.onClose(true);
              }, 5000);
            } else {
              if (callbacks && callbacks.onError) callbacks.onError('SDK not ready');
            }
          },
          showRewardedVideo: function(callbacks) {
            console.log('[sdk-stub] showRewardedVideo called');
            if (typeof sdk !== 'undefined' && sdk.showBanner) {
              if (callbacks && callbacks.onOpen) callbacks.onOpen();
              sdk.showBanner();
              setTimeout(function() {
                if (callbacks && callbacks.onRewarded) callbacks.onRewarded();
                setTimeout(function() {
                  if (callbacks && callbacks.onClose) callbacks.onClose();
                }, 500);
              }, 4000);
            } else {
              if (callbacks && callbacks.onError) callbacks.onError('SDK not ready');
            }
          },
          showBannerAdv: () => Promise.resolve(),
          hideBannerAdv: () => Promise.resolve(),
          destroyBannerAdv: () => Promise.resolve(),
        },
        getPlayer: () => Promise.resolve({
          getMode: () => 'lite',
          getData: (keys) => {
            const out = {};
            (keys || []).forEach(k => {
              const cached = localStorage.getItem('gm_' + k);
              out[k] = cached || null;
            });
            return Promise.resolve(out);
          },
          setData: (data) => {
            if (data) {
              Object.keys(data).forEach(k => {
                if (data[k] != null) localStorage.setItem('gm_' + k, JSON.stringify(data[k]));
              });
            }
            return Promise.resolve();
          },
          getStats: () => Promise.resolve({}),
          setStats: () => Promise.resolve(),
          getName: () => 'Player',
          getPhoto: () => '',
          getUniqueID: () => 'gamemonetize-player',
          uniqueId: 'gamemonetize-player',
          getSignedData: () => Promise.resolve(''),
        }),
        getFlags: () => Promise.resolve({}),
        getLeaderboards: () => Promise.resolve({
          setLeaderboardScore: () => Promise.resolve(),
          getLeaderboardPlayerEntry: () => Promise.reject(new Error('no entry')),
          getLeaderboardEntries: () => Promise.resolve([]),
        }),
        getPayments: () => Promise.resolve({
          getCatalog: () => Promise.resolve([]),
          getPurchases: () => Promise.resolve([]),
          purchase: () => Promise.resolve(),
          consumePurchase: () => Promise.resolve(),
        }),
        purchases: { getPurchases: () => Promise.resolve([]), consumePurchase: () => Promise.resolve() },
      });
    }
  }
  window.YaGames = YaGames;
  console.log('[sdk-stub] loaded');
})();
