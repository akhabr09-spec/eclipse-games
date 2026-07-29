const bridge = {
    engine: 'unity',
    initialize() { return Promise.resolve() },
    game: {
        setLoadingProgress() {},
        on() {},
        visibilityState: 'visible'
    },
    advertisement: {
        on() {},
        interstitialState: '',
        isBannerSupported: false,
        isInterstitialSupported: false,
        minimumDelayBetweenInterstitial: 0,
        isRewardedSupported: false,
        rewardedPlacement: '',
        isAdvancedBannersSupported: false,
        advancedBannersState: '',
        showBanner() {}
,
        hideBanner() {},
        showInterstitial() {},
        showRewarded() {},
        showAdvancedBanners() {},
        hideAdvancedBanners() {},
        checkAdBlock() { return Promise.resolve(false) },
        setMinimumDelayBetweenInterstitial() {}
    },
    platform: {
        on() {},
        id: /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'yandex' : 'local',
        language: 'ar',
        tld: 'com',
        isAudioEnabled: true,
        isGetAllGamesSupported: false,
        isGetGameByIdSupported: false,
        payload: '',
        sendMessage() {},
        sendCustomMessage() {},
        getServerTime() { return Promise.resolve(Date.now()) },
        getAllGames() { return Promise.resolve([]) },
        getGameById() { return Promise.resolve(null) }
    },
    device: {
        type: /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        safeArea: {}
    },
    player: {
        isAuthorizationSupported: false,
        isAuthorized: false,
        id: null,
        name: 'Player',
        photos: [],
        extra: null,
        authorize() { return Promise.resolve() }
    },
    storage: {
        defaultType: 'localStorage',
        isSupported() { return true },
        isAvailable() { return true },
        get(keys) { return Promise.resolve(keys.map(() => null)) },
        set() { return Promise.resolve() },
        delete() { return Promise.resolve() }
    },
    social: {
        isShareSupported: false,
        isInviteFriendsSupported: false,
        isJoinCommunitySupported: false,
        isCreatePostSupported: false,
        isAddToHomeScreenSupported: false,
        isAddToHomeScreenRewardSupported: false,
        isAddToFavoritesSupported: false,
        isAddToFavoritesRewardSupported: false,
        isRateSupported: false,
        isExternalLinksAllowed: false,
        share() { return Promise.resolve() },
        inviteFriends() { return Promise.resolve() },
        joinCommunity() { return Promise.resolve() },
        createPost() { return Promise.resolve() },
        addToHomeScreen() { return Promise.resolve(false) },
        addToFavorites() { return Promise.resolve(false) },
        rate() { return Promise.resolve() },
        getAddToHomeScreenReward() { return Promise.resolve(false) },
        getAddToFavoritesReward() { return Promise.resolve(false) }
    },
    leaderboards: {
        type: 'internal',
        setScore() { return Promise.resolve() },
        getEntries() { return Promise.resolve([]) },
        showNativePopup() { return Promise.resolve() }
    },
    payments: {
        isSupported: false,
        purchase() { return Promise.reject() },
        consumePurchase() { return Promise.reject() },
        getCatalog() { return Promise.resolve([]) },
        getPurchases() { return Promise.resolve([]) }
    },
    remoteConfig: {
        isSupported: false,
        get() { return Promise.resolve({}) }
    },
    achievements: {
        isSupported: false,
        isGetListSupported: false,
        isNativePopupSupported: false,
        unlock() { return Promise.resolve() },
        showNativePopup() { return Promise.resolve() },
        getList() { return Promise.resolve([]) }
    }
}

// --- Global window functions that Unity PlaygamaBridge expects ---

// platform
window.getPlatformId = () => bridge.platform.id
window.getPlatformLanguage = () => bridge.platform.language
window.getPlatformPayload = () => bridge.platform.payload || ''
window.getPlatformTld = () => bridge.platform.tld || ''
window.getIsPlatformAudioEnabled = () => bridge.platform.isAudioEnabled.toString()
window.getIsPlatformGetAllGamesSupported = () => 'false'
window.getIsPlatformGetGameByIdSupported = () => 'false'
window.sendMessageToPlatform = (msg, opts) => { bridge.platform.sendMessage(msg, opts && JSON.parse(opts)) }
window.sendCustomMessageToPlatform = (id, opts) => { bridge.platform.sendCustomMessage(id, opts && JSON.parse(opts)) }
window.getServerTime = () => bridge.platform.getServerTime().then(r => sendMessageToUnity('OnGetServerTimeCompleted', r.toString())).catch(() => sendMessageToUnity('OnGetServerTimeCompleted', 'false'))
window.getAllGames = () => bridge.platform.getAllGames().then(r => sendMessageToUnity('OnGetAllGamesCompletedSuccess', JSON.stringify(r))).catch(() => sendMessageToUnity('OnGetAllGamesCompletedFailed'))
window.getGameById = (opts) => bridge.platform.getGameById(opts && JSON.parse(opts)).then(r => sendMessageToUnity('OnGetGameByIdCompletedSuccess', JSON.stringify(r))).catch(() => sendMessageToUnity('OnGetGameByIdCompletedFailed'))

// device
window.getDeviceType = () => bridge.device.type
window.getSafeArea = () => JSON.stringify(bridge.device.safeArea)

// player
window.getIsPlayerAuthorizationSupported = () => bridge.player.isAuthorizationSupported.toString()
window.getIsPlayerAuthorized = () => bridge.player.isAuthorized.toString()
window.getPlayerId = () => bridge.player.id ? bridge.player.id.toString() : ''
window.getPlayerName = () => bridge.player.name ? bridge.player.name.toString() : ''
window.getPlayerPhotos = () => bridge.player.photos.length > 0 ? JSON.stringify(bridge.player.photos) : ''
window.getPlayerExtra = () => bridge.player.extra ? JSON.stringify(bridge.player.extra) : ''
window.authorizePlayer = (opts) => { bridge.player.authorize(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnAuthorizeCompleted', 'true')).catch(() => sendMessageToUnity('OnAuthorizeCompleted', 'false')) }

// game
window.getVisibilityState = () => bridge.game.visibilityState

// storage
window.getStorageDefaultType = () => bridge.storage.defaultType
window.getIsStorageSupported = (type) => bridge.storage.isSupported(type).toString()
window.getIsStorageAvailable = (type) => bridge.storage.isAvailable(type).toString()
window.getStorageData = (key, storageType) => {
    let keys = key.split('{bridge_keys_separator}')
    bridge.storage.get(keys, storageType).then(data => {
        if (keys.length > 1) {
            let vals = data.map(v => v ? (typeof v !== 'string' ? JSON.stringify(v) : v) : '')
            sendMessageToUnity('OnGetStorageDataSuccess', key + '{bridge_data_separator}' + vals.join('{bridge_values_separator}'))
        } else {
            let v = data[0]
            if (v && typeof v !== 'string') v = JSON.stringify(v)
            sendMessageToUnity('OnGetStorageDataSuccess', key + '{bridge_data_separator}' + (v || ''))
        }
    }).catch(() => sendMessageToUnity('OnGetStorageDataFailed', key))
}
window.setStorageData = (key, value, storageType) => {
    let keys = key.split('{bridge_keys_separator}')
    let values = value.split('{bridge_values_separator}')
    bridge.storage.set(keys, values, storageType).then(() => sendMessageToUnity('OnSetStorageDataSuccess', key)).catch(() => sendMessageToUnity('OnSetStorageDataFailed', key))
}
window.deleteStorageData = (key, storageType) => {
    let keys = key.split('{bridge_keys_separator}')
    bridge.storage.delete(keys, storageType).then(() => sendMessageToUnity('OnDeleteStorageDataSuccess', key)).catch(() => sendMessageToUnity('OnDeleteStorageDataFailed', key))
}

// advertisement
window.getInterstitialState = () => bridge.advertisement.interstitialState || ''
window.getIsBannerSupported = () => bridge.advertisement.isBannerSupported.toString()
window.getIsInterstitialSupported = () => bridge.advertisement.isInterstitialSupported.toString()
window.getMinimumDelayBetweenInterstitial = () => bridge.advertisement.minimumDelayBetweenInterstitial.toString()
window.setMinimumDelayBetweenInterstitial = (opts) => bridge.advertisement.setMinimumDelayBetweenInterstitial(opts)
window.getIsRewardedSupported = () => bridge.advertisement.isRewardedSupported.toString()
window.getRewardedPlacement = () => bridge.advertisement.rewardedPlacement || ''
window.showBanner = (pos, placement) => bridge.advertisement.showBanner(pos, placement)
window.hideBanner = () => bridge.advertisement.hideBanner()
window.showInterstitial = (placement) => bridge.advertisement.showInterstitial(placement)
window.showRewarded = (placement) => bridge.advertisement.showRewarded(placement)
window.getIsAdvancedBannersSupported = () => bridge.advertisement.isAdvancedBannersSupported.toString()
window.getAdvancedBannersState = () => bridge.advertisement.advancedBannersState || ''
window.showAdvancedBanners = (placement) => bridge.advertisement.showAdvancedBanners(placement)
window.hideAdvancedBanners = () => bridge.advertisement.hideAdvancedBanners()
window.checkAdBlock = () => bridge.advertisement.checkAdBlock().then(r => sendMessageToUnity('OnCheckAdBlockCompleted', r.toString())).catch(() => sendMessageToUnity('OnCheckAdBlockCompleted', 'false'))

// social
window.getIsShareSupported = () => bridge.social.isShareSupported.toString()
window.getIsInviteFriendsSupported = () => bridge.social.isInviteFriendsSupported.toString()
window.getIsJoinCommunitySupported = () => bridge.social.isJoinCommunitySupported.toString()
window.getIsCreatePostSupported = () => bridge.social.isCreatePostSupported.toString()
window.getIsAddToHomeScreenSupported = () => bridge.social.isAddToHomeScreenSupported.toString()
window.getIsAddToHomeScreenRewardSupported = () => bridge.social.isAddToHomeScreenRewardSupported.toString()
window.getIsAddToFavoritesSupported = () => bridge.social.isAddToFavoritesSupported.toString()
window.getIsAddToFavoritesRewardSupported = () => bridge.social.isAddToFavoritesRewardSupported.toString()
window.getIsRateSupported = () => bridge.social.isRateSupported.toString()
window.getIsExternalLinksAllowed = () => bridge.social.isExternalLinksAllowed.toString()
window.share = (opts) => bridge.social.share(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnShareCompleted', 'true')).catch(() => sendMessageToUnity('OnShareCompleted', 'false'))
window.inviteFriends = (opts) => bridge.social.inviteFriends(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnInviteFriendsCompleted', 'true')).catch(() => sendMessageToUnity('OnInviteFriendsCompleted', 'false'))
window.joinCommunity = (opts) => bridge.social.joinCommunity(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnJoinCommunityCompleted', 'true')).catch(() => sendMessageToUnity('OnJoinCommunityCompleted', 'false'))
window.createPost = (opts) => bridge.social.createPost(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnCreatePostCompleted', 'true')).catch(() => sendMessageToUnity('OnCreatePostCompleted', 'false'))
window.addToHomeScreen = () => bridge.social.addToHomeScreen().then(() => sendMessageToUnity('OnAddToHomeScreenCompleted', 'true')).catch(() => sendMessageToUnity('OnAddToHomeScreenCompleted', 'false'))
window.addToFavorites = () => bridge.social.addToFavorites().then(() => sendMessageToUnity('OnAddToFavoritesCompleted', 'true')).catch(() => sendMessageToUnity('OnAddToFavoritesCompleted', 'false'))
window.rate = () => bridge.social.rate().then(() => sendMessageToUnity('OnRateCompleted', 'true')).catch(() => sendMessageToUnity('OnRateCompleted', 'false'))
window.getAddToHomeScreenReward = () => bridge.social.getAddToHomeScreenReward().then(() => sendMessageToUnity('OnGetAddToHomeScreenRewardCompleted', 'true')).catch(() => sendMessageToUnity('OnGetAddToHomeScreenRewardCompleted', 'false'))
window.getAddToFavoritesReward = () => bridge.social.getAddToFavoritesReward().then(() => sendMessageToUnity('OnGetAddToFavoritesRewardCompleted', 'true')).catch(() => sendMessageToUnity('OnGetAddToFavoritesRewardCompleted', 'false'))

// leaderboards
window.getLeaderboardsType = () => bridge.leaderboards.type
window.leaderboardsSetScore = (id, score) => bridge.leaderboards.setScore(id, parseInt(score)).then(() => sendMessageToUnity('OnLeaderboardsSetScoreCompleted', 'true')).catch(() => sendMessageToUnity('OnLeaderboardsSetScoreCompleted', 'false'))
window.leaderboardsGetEntries = (id) => bridge.leaderboards.getEntries(id).then(data => sendMessageToUnity('OnLeaderboardsGetEntriesCompletedSuccess', data ? JSON.stringify(data) : '')).catch(() => sendMessageToUnity('OnLeaderboardsGetEntriesCompletedFailed', 'false'))
window.leaderboardsShowNativePopup = (id) => bridge.leaderboards.showNativePopup(id).then(() => sendMessageToUnity('OnLeaderboardsShowNativePopupCompleted', 'true')).catch(() => sendMessageToUnity('OnLeaderboardsShowNativePopupCompleted', 'false'))

// payments
window.getIsPaymentsSupported = () => bridge.payments.isSupported.toString()
window.paymentsPurchase = (id, opts) => bridge.payments.purchase(id, opts && JSON.parse(opts)).then(data => sendMessageToUnity('OnPaymentsPurchaseCompleted', data ? (typeof data !== 'string' ? JSON.stringify(data) : data) : '')).catch(() => sendMessageToUnity('OnPaymentsPurchaseFailed', ''))
window.paymentsConsumePurchase = (id) => bridge.payments.consumePurchase(id).then(data => sendMessageToUnity('OnPaymentsConsumePurchaseCompleted', data ? (typeof data !== 'string' ? JSON.stringify(data) : data) : '')).catch(() => sendMessageToUnity('OnPaymentsConsumePurchaseFailed', ''))
window.paymentsGetCatalog = () => bridge.payments.getCatalog().then(data => sendMessageToUnity('OnPaymentsGetCatalogCompletedSuccess', data ? JSON.stringify(data) : '')).catch(() => sendMessageToUnity('OnPaymentsGetCatalogCompletedFailed', ''))
window.paymentsGetPurchases = () => bridge.payments.getPurchases().then(data => sendMessageToUnity('OnPaymentsGetPurchasesCompletedSuccess', data ? JSON.stringify(data) : '')).catch(() => sendMessageToUnity('OnPaymentsGetPurchasesCompletedFailed', ''))

// remote config
window.getIsRemoteConfigSupported = () => bridge.remoteConfig.isSupported.toString()
window.remoteConfigGet = (opts) => bridge.remoteConfig.get(opts && JSON.parse(opts)).then(data => sendMessageToUnity('OnRemoteConfigGetSuccess', typeof data !== 'string' ? JSON.stringify(data) : data)).catch(() => sendMessageToUnity('OnRemoteConfigGetFailed', ''))

// achievements
window.getIsAchievementsSupported = () => bridge.achievements.isSupported.toString()
window.getIsGetAchievementsListSupported = () => bridge.achievements.isGetListSupported.toString()
window.getIsAchievementsNativePopupSupported = () => bridge.achievements.isNativePopupSupported.toString()
window.achievementsUnlock = (opts) => bridge.achievements.unlock(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnAchievementsUnlockCompleted', 'true')).catch(() => sendMessageToUnity('OnAchievementsUnlockCompleted', 'false'))
window.achievementsShowNativePopup = (opts) => bridge.achievements.showNativePopup(opts && JSON.parse(opts)).then(() => sendMessageToUnity('OnAchievementsShowNativePopupCompleted', 'true')).catch(() => sendMessageToUnity('OnAchievementsShowNativePopupCompleted', 'false'))
window.achievementsGetList = (opts) => bridge.achievements.getList(opts && JSON.parse(opts)).then(data => sendMessageToUnity('OnAchievementsGetListCompletedSuccess', data ? JSON.stringify(data) : '')).catch(() => sendMessageToUnity('OnAchievementsGetListCompletedFailed', 'false'))

