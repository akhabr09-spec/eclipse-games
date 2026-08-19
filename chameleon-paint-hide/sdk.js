(function () {
  if (window.YaGames) { console.log('[sdk-stub] YaGames already exists, skipping'); return; }
  class YaGames {
    static init() {
      console.log('[sdk-stub] YaGames.init called');
      return Promise.resolve({
        environment: { i18n: { lang: 'en' } },
        deviceInfo: { type: 'desktop' },
        features: {},
        adv: {
          getBannerAdvStatus: () => Promise.resolve({ stickyAdvIsShowing: false, reason: null }),
          showInterstitial: () => Promise.resolve(),
          showRewardedVideo: () => Promise.resolve({ status: 'error' }),
          getBannerAdv: () => Promise.resolve(),
          destroyBannerAdv: () => Promise.resolve(),
          showBannerAdv: () => Promise.resolve(),
          hideBannerAdv: () => Promise.resolve(),
        },
        getPlayer: () => Promise.resolve({
          getMode: () => 'lite',
          getData: (keys) => {
            const out = {};
            (keys || []).forEach(k => out[k] = null);
            return Promise.resolve(out);
          },
          setData: () => Promise.resolve(),
          getStats: () => Promise.resolve({}),
          setStats: () => Promise.resolve(),
          getName: () => 'Player',
          getPhoto: () => '',
          getUniqueID: () => 'stub-player',
          uniqueId: 'stub-player',
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
        features: { LoadRemoteConfig: () => Promise.resolve({ get: () => ({}), getAsString: () => '' }) },
      });
    }
  }
  window.YaGames = YaGames;
  console.log('[sdk-stub] loaded');
})();
