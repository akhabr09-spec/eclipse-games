function gpinit(gp){
  window.ysdk = null;
  window.gp = gp;
  if(gp != null){	
	gp.sounds.on('mute:sfx', () => {
	   unityInstance.SendMessage('Interop', 'mute');
	});	
	gp.sounds.on('unmute:sfx', () => {
		unityInstance.SendMessage('Interop', 'unmute');
	});
    gp.ads.showSticky();	
	if(gp.platform.type == 'YANDEX'){
		window.ysdk = gp.platform.getNativeSDK();
		window.ndk = window.ysdk;
	}
	else gp.ads.showPreloader();
  }
  window.isMobile = gp == null ? true : gp.isMobile;
  if(window.isMobile){
	  unityInstance.SendMessage('Main Camera', 'isMobile');
  }  
  
  if(gp != null){
	  if(gp.sounds.isSFXMuted){
		 unityInstance.SendMessage('Main Camera', 'SoundsMuted');
	  }
	  if(!gp.socials.isSupportsShare || gp.platform.type == 'GAME_DISTRIBUTION'){
		 unityInstance.SendMessage('Main Camera', 'ShareNoSupport');
		 window.cancelleads = true;
	  }
	  else window.cancelleads = false;  
  }
  else window.cancelleads = true;
  
  window.lang = gp == null ? "ru" : gp.language;
  unityInstance.SendMessage('Main Camera', 'SetLang', lang);
  window.lb = null;
  document.addEventListener("visibilitychange", visibleChange);
  storage(() =>{
    unityInstance.SendMessage('Main Camera', 'LoadSave', storage.get('main') == null ? '{}' : storage.get('main'));
    unityInstance.SendMessage('Main Camera', 'GetWork', gp == null ? "GOOGLE_PLAY" : gp.platform.type);
    $('canvas').css({'width':'100%','height':'100%'});
  });
}

function getOverlay(){
  const overlay = $('<div class="overlay">').css({
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'color':'white',
    'width': '100%',
    'height': '100%',
    'background': 'rgba(0,0,0,0.9)',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'z-index': 9999
  });

  const content = $('<div>').css({'text-align':'center'});

  $('body').append(overlay.append(content));

  return content;
}

function InitJSGP(id, token){
    const apiurl = 'https://gs.eponesh.com/sdk/gamepush.js?projectId='+id+'&publicToken='+token+'&callback=gpinit';

    const t = document.getElementsByTagName('script')[0];
    const s = document.createElement('script');
    s.src = apiurl;
    s.async = true;
    t.parentNode.insertBefore(s, t);

    s.onerror = function() {
        gpinit(null);
    }

    document.addEventListener('visibilitychange', visibleChange);
}

function InitSDK(){} //воронка для старого загрузчика

function visibleChange(){
	if (document.visibilityState === 'hidden') {
      unityInstance.SendMessage('Interop', 'PreBanner');
    } else if (!advscr) {
      unityInstance.SendMessage('Interop', 'PostBanner');
    }
}