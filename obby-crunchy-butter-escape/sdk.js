var YaGames = {
    init: function() {
        return Promise.resolve({
            environment: {
                i18n: { lang: 'ar', tld: 'com' },
                app: { id: 'local' },
                browser: { lang: 'ar' },
                payload: ''
            },
            deviceInfo: {
                type: 'desktop',
                isMobile: function() { return false },
                isDesktop: function() { return true },
                isTablet: function() { return false },
                isTV: function() { return false }
            },
            getPlayer: function() {
                return Promise.resolve({
                    isAuthorized: function() { return false },
                    getName: function() { return 'Player' },
                    getUniqueID: function() { return 'local' },
                    getPhoto: function() { return '' },
                    getPayingStatus: function() { return 'unknown' },
                    getData: function() { return Promise.resolve({}) },
                    setData: function() {},
                    getStats: function() { return Promise.resolve({}) },
                    setStats: function() {}
                })
            },
            auth: {
                openAuthDialog: function() { return Promise.reject() }
            },
            adv: {
                showFullscreenAdv: function() {},
                showRewardedVideo: function() {}
            },
            on: function() {},
            off: function() {}
        })
    }
}
