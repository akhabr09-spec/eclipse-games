// JavaScript Document
if (typeof Phaser !== 'undefined' && Phaser.Device) {
    Phaser.Device.canPlayAudio = function(type) {
        var t = type.split('.').pop().toLowerCase();
        return t === 'snd' || t === 'mp3' || t === 'ogg' || t === 'wav' || t === 'm4a' || t === 'aac' || t === 'opus';
    };
}
function CreateLinksInGame(NameID,Screen,Button,GameId){
	GameId = typeof GameId !== 'undefined' ? GameId : "";
	var domain=document.referrer;
	var url="https://www.7sgames.com";
	if(typeof GameId  === 'undefined' || GameId == "" || GameId == "undefined"){
    	
    }else{
		url = url+"&pic="+GameId;
	}
    if(typeof domain  === 'undefined' || domain == "" || domain == "undefined"){
    	domain="unknown";
    }else{
    	domain=domain.split('/')[2];
    }
	if(url.indexOf("?") > -1){
		url=url+"&";
	}else{
		url=url+"?";
	}
	url=url+"utm_source="+domain+"&utm_medium="+Screen+"-"+Button+"&utm_campaign=game-"+NameID;
	window.open(url);
}
