mergeInto(LibraryManager.library, {
    // Show interstitial ad
    ShowInterstitial: function() {
        if (window.platformSDK) {
            window.platformSDK.showInterstitial();
        }
    },

    // Show rewarded ad
    ShowRewarded: function(callbackPtr) {
        if (window.platformSDK) {
            window.platformSDK.showRewarded(function(success) {
                {{{ makeDynCall('vi', 'callbackPtr') }}}(success ? 1 : 0);
            });
        } else {
            {{{ makeDynCall('vi', 'callbackPtr') }}}(0);
        }
    },

    // Send game update
    SendGameUpdate: function(textPtr, score, callbackPtr) {
        var text = UTF8ToString(textPtr);
        if (window.platformSDK) {
            window.platformSDK.sendGameUpdate({
                text: text,
                score: score
            }).then(function(success) {
                {{{ makeDynCall('vi', 'callbackPtr') }}}(success ? 1 : 0);
            });
        } else {
            {{{ makeDynCall('vi', 'callbackPtr') }}}(0);
        }
    },

    // Get player data
    GetPlayerData: function(keysPtr, callbackPtr) {
        var keys = UTF8ToString(keysPtr).split(',');
        if (window.platformSDK) {
            window.platformSDK.getPlayerData(keys).then(function(data) {
                var json = JSON.stringify(data);
                var bufferSize = lengthBytesUTF8(json) + 1;
                var buffer = _malloc(bufferSize);
                stringToUTF8(json, buffer, bufferSize);
                {{{ makeDynCall('vi', 'callbackPtr') }}}(buffer);
            });
        } else {
            var json = '{}';
            var bufferSize = lengthBytesUTF8(json) + 1;
            var buffer = _malloc(bufferSize);
            stringToUTF8(json, buffer, bufferSize);
            {{{ makeDynCall('vi', 'callbackPtr') }}}(buffer);
        }
    },

    // Set player data
    SetPlayerData: function(dataPtr, callbackPtr) {
        var json = UTF8ToString(dataPtr);
        try {
            var data = JSON.parse(json);
            if (window.platformSDK) {
                window.platformSDK.setPlayerData(data).then(function() {
                    {{{ makeDynCall('vi', 'callbackPtr') }}}(1);
                });
            } else {
                {{{ makeDynCall('vi', 'callbackPtr') }}}(1);
            }
        } catch (e) {
            {{{ makeDynCall('vi', 'callbackPtr') }}}(0);
        }
    },

    // Get platform info
    GetPlatform: function() {
        var platform = 'local';
        if (window.platformSDK) {
            platform = window.platformSDK.platform;
        }
        var bufferSize = lengthBytesUTF8(platform) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(platform, buffer, bufferSize);
        return buffer;
    },

    // Check if platform supports features
    SupportsFeature: function(featurePtr) {
        var feature = UTF8ToString(featurePtr);
        var platform = window.platformSDK ? window.platformSDK.platform : 'local';
        
        switch(feature) {
            case 'ads':
                return (platform === 'facebook' || platform === 'yandex') ? 1 : 0;
            case 'cloud_saves':
                return (platform === 'facebook' || platform === 'yandex') ? 1 : 0;
            case 'game_updates':
                return (platform === 'facebook') ? 1 : 0;
            case 'context':
                return (platform === 'facebook') ? 1 : 0;
            default:
                return 0;
        }
    },

    // Get context info (Facebook only)
    GetContext: function() {
        if (window.platformSDK && window.platformSDK.platform === 'facebook') {
            var context = window.platformSDK.getContext();
            var json = JSON.stringify(context);
            var bufferSize = lengthBytesUTF8(json) + 1;
            var buffer = _malloc(bufferSize);
            stringToUTF8(json, buffer, bufferSize);
            return buffer;
        }
        var json = '{"id":null,"type":null}';
        var bufferSize = lengthBytesUTF8(json) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(json, buffer, bufferSize);
        return buffer;
    },

    // Choose context (Facebook only)
    ChooseContext: function(callbackPtr) {
        if (window.platformSDK && window.platformSDK.platform === 'facebook') {
            window.platformSDK.chooseContext().then(function() {
                {{{ makeDynCall('vi', 'callbackPtr') }}}(1);
            }).catch(function() {
                {{{ makeDynCall('vi', 'callbackPtr') }}}(0);
            });
        } else {
            {{{ makeDynCall('vi', 'callbackPtr') }}}(0);
        }
    }
});
