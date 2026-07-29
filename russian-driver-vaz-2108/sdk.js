(function() {
  if (window.YaGames) return;
  try {
    var ua = navigator.userAgent || '';
    var isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    var isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
    var isDesktop = !isMobile && !isTablet;
    var isTV = /SmartTV|Tizen|WebOS/i.test(ua);
    var deviceType = isTV ? 'tv' : isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';
    var lang = (navigator.language || 'en').split('-')[0];
    var tld = 'com';
    var appID = '0';

    function createPlayer(authorized) {
      return {
        isAuthorized: function() { return authorized; },
        getName: function() { return authorized ? 'Player' : ''; },
        getUniqueID: function() { return authorized ? 'local-player-id' : ''; },
        getPhoto: function(size) { return ''; },
        getPayingStatus: function() { return 'unknown'; },
        getData: function(keys) {
          try {
            var data = JSON.parse(localStorage.getItem('yg_cloud_saves') || '{}');
            return Promise.resolve(data);
          } catch(e) { return Promise.resolve({}); }
        },
        setData: function(data, flush) {
          try {
            var existing = JSON.parse(localStorage.getItem('yg_cloud_saves') || '{}');
            for (var k in data) existing[k] = data[k];
            localStorage.setItem('yg_cloud_saves', JSON.stringify(existing));
          } catch(e) {}
        }
      };
    }

    var ya = {
      init: function() {
        return new Promise(function(resolve) {
          var sdk = {
            environment: {
              i18n: { lang: lang, tld: tld },
              app: { id: appID },
              browser: { lang: lang },
              payload: null
            },
            deviceInfo: {
              type: deviceType,
              isMobile: function() { return isMobile; },
              isDesktop: function() { return isDesktop; },
              isTablet: function() { return isTablet; },
              isTV: function() { return isTV; }
            },
            on: function(event, cb) {
              if (event === 'game_api_pause' || event === 'game_api_resume') {
                document.addEventListener('visibilitychange', function() {
                  if (event === 'game_api_pause' && document.hidden) cb();
                  if (event === 'game_api_resume' && !document.hidden) cb();
                });
              }
            },
            getPlayer: function() { return Promise.resolve(createPlayer(false)); },
            auth: {
              openAuthDialog: function() {
                return new Promise(function(resolve) { resolve(); });
              }
            },
            adv: {
              showFullscreenAdv: function(opts) {
                if (opts && opts.callbacks) {
                  if (opts.callbacks.onOpen) opts.callbacks.onOpen();
                  setTimeout(function() {
                    if (opts.callbacks.onClose) opts.callbacks.onClose(false);
                  }, 100);
                }
              },
              showSticky: function() {},
              hideSticky: function() {}
            },
            feedback: {
              canReview: function() { return Promise.resolve({ value: false }); },
              requestReview: function() { return Promise.resolve({ feedbackSent: false }); }
            },
            features: {
              GamesAPI: {
                getAllGames: function() { return Promise.resolve({ games: [], developerURL: '' }); }
              },
              LoadingAPI: {
                ready: function() {}
              }
            },
            shortcuts: { canShow: function() { return Promise.resolve(false); } }
          };
          resolve(sdk);
        });
      }
    };

    window.YaGames = ya;
  } catch(e) {
    console.warn('SDK stub error:', e);
    window.YaGames = { init: function() { return Promise.resolve({}); } };
  }
})();
