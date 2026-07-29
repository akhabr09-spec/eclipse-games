function sdk_GamePlayStart(){
if(window.gp!=null) gp.gameplayStart();
}

function sdk_GamePlayEnd(){
  if(window.gp!=null)gp.gameplayStop();
}

var advscr = false;

async function yabanner() {
	if(advscr)return;
	
	if(window.ndk != null){
		ndk.adv.showFullscreenAdv({
        callbacks: {
            onOpen: function() {
                // Объявление открылось
            },
            onClose: function() {
                unityInstance.SendMessage('Interop', 'PostBanner');
                advscr = false;
            },
            onError: function(error) {
                unityInstance.SendMessage('Interop', 'PostBanner');
                advscr = false;
            }
        }
		});
		return;
	}

    if(window.gp == null){
        unityInstance.SendMessage('Interop', 'PostBanner');
        return;
    }

    advscr = true;

    unityInstance.SendMessage('Interop', 'PreBanner');
    const success = await gp.ads.showFullscreen();
    unityInstance.SendMessage('Interop', 'PostBanner');
    advscr = false;
}

async function yarbanner() {
	if(advscr)return;
	
	if(window.ndk != null){
		ndk.adv.showRewardedVideo({
			callbacks: {
				onOpen: function() {
					// Объявление открылось
				},
				onRewarded: function() {
					unityInstance.SendMessage('Interop', 'REWARDCOMPLITE');
				},
				onClose: function() {
					unityInstance.SendMessage('Interop', 'PostBanner');
					advscr = false;
				},
				onError: function(error) {
					unityInstance.SendMessage('Interop', 'PostBanner');
					advscr = false;
				}
			}
		});
		return;
	}

    if(window.gp == null){
        unityInstance.SendMessage('Interop', 'PostBanner');
        return;
    }

    advscr = true;

    unityInstance.SendMessage('Interop', 'PreBanner');
    const success = await gp.ads.showRewardedVideo();
    if (success) {
		unityInstance.SendMessage('Interop', 'REWARDCOMPLITE');
    }
    unityInstance.SendMessage('Interop', 'PostBanner');
    advscr = false;
}

function gpMute(){
  gp.sounds.muteSFX();
}

function gpUnmute(){
  gp.sounds.unmuteSFX();
}

function share(ru,en){
  if(gp!=null) gp.socials.share({
    text: lang == 'ru' ? ru : en
  });
}

function PushSave(json){
  storage.set('main',json);
  storage.push();
}

function WorldLoaded() {
    if(window.ndk!=null){
     ndk.getLeaderboards().then(lb => {
         window.lb = lb;
     });

     ndk.features.LoadingAPI?.ready();
   } else {
    gp.gameStart();
   }
    window.WorldLoaded = function(){};
}

function SetCursor(cursor){
	$('canvas').css({'cursor':cursor});
}

function ScoreToLead(score){
	if(window.lb != null) window.lb.setLeaderboardScore('lead', parseInt(score));
    if(window.ndk == null){
        if(window.cancelleads) return;
	 
	    gp.leaderboard.publishRecord({
		    tag: 'lead',
		    variant: 'global',
		    override: true,
		    record: {'score': score}
	    });
    }
}

function ScoreToLead_2args(lead, score){
	if(window.lb != null) window.lb.setLeaderboardScore(lead, parseInt(score));
    if(window.ndk == null){
        if(window.cancelleads) return;
	 
	    gp.leaderboard.publishRecord({
		    tag: lead,
		    variant: 'global',
		    override: true,
		    record: {'score': score}
	    });
    }
}

function ScoreToLeadD(score){
	setTimeout(()=>{
		ScoreToLead(score);
	},3000);
}

function ScoreToLead_2argsD(lead, score){
	setTimeout(()=>{
		ScoreToLead_2args(lead,score);
	},3000);
}

const lbcMap = {};
var leadCaption = {};
var leadIsTime = {};

function slc(key, value){
	leadCaption[key] = JSON.parse(value);
}

function slt(key, value){
	leadIsTime[key] = parseInt(value) == 1;
}

function wndKeyBool(key,value){
	window[key] = parseInt(value) == 1;
}

function showleads(LeadID){

   if(LeadID == null || LeadID == 0)
     LeadID = 'lead';

    if(window.ndk == null)
    {
        if(window.cancelleads) return;

        if(ParseGPLeaderboard){
            parseLeads(LeadID);
            return;
        }
  
         gp.leaderboard.openScoped({
            tag: LeadID,
	        variant: 'global',
            withMe: 'last',
            showNearest: 5,
        });

        return;
    }

  if (window.lb != null) {
    if (showleads.showleadsLock) return;
    showleads.showleadsLock = true;

    // Если уже есть кэш для этого LeadID — показываем
    if (lbcMap[LeadID]) {
      showlb(lbcMap[LeadID], LeadID);
      return;
    }

    // Загружаем данные по конкретному LeadID
    lb.getLeaderboardEntries(LeadID, { quantityTop: 20 }).then(result => {
      lbcMap[LeadID] = result;
      showlb(result, LeadID);

      // Очищаем кэш через 50 секунд
      setTimeout(() => {
        delete lbcMap[LeadID];
      }, 50000);
    });
  }
}

async function parseLeads(LeadID){
  if (showleads.showleadsLock) return;
    showleads.showleadsLock = true;

    const result = await gp.leaderboard.fetchScoped({
		tag: LeadID,
		variant: 'global',
		limit: 20,
		includeFields: ['score'],
		withMe: 'last'
	});
	
	showlbGP(result,LeadID);
}

function showlb(result, LeadID){
  const lb_data = $('<div class="leaderbord_data_rows">');
  const players = result.entries;

  if(players.length == 0){
    lb_data.html(lang == 'ru' ? '<p><center>Пусто</center></p>' : '<p><center>Empty</center></p>')
  }

  const noTime = !leadIsTime[LeadID];

for (let i = 0; i < players.length; i++)
{
    const p = players[i];

    const avatar = p.player.getAvatarSrc();
    let nick = p.player.publicName;
    if (nick == '')
    {
        nick = lang == 'ru' ? 'Аноним' : 'Anonymous';
    }
    const score = noTime ? p.score : timeToString(p.score);

    lb_data.append(getRow([
      getColumn(['<span>№' + parseInt(i + 1) + ' </span>']),
      getColumn("<img src='" + avatar + "'>"),
      getColumn('<span>' + nick + '</span>').css(p.player.uniqueID == playerUID ? { 'color':'lime'} : { }),
      getColumn('<span>' + score + '</span>')
    ]));
  }

  const o = getOverlay();
o.append(
    $('<div class="leaderbords">').append(getCurlb()),
    $('<p>').append(
      $('<button class="button2">').text(lang == 'ru' ? 'Назад' : 'Back').click(function(){
        $('.overlay').remove();
    showleads.showleadsLock = false;
})
    )
  ).hide().show(200);

function getCurlb()
{
    return $('<div class="leaderbord">').append([
      $('<h3>').text(leadCaption[LeadID][window.lang]),
      $('<div class="leaderbord_data">').append(lb_data)
    ]);
  }

  function getRow(data)
{
    return $('<div class="row">').append(data);
}

function getColumn(data)
{
    return $('<div class="col">').append(data);
}
}

function showlbGP(result, LeadID){
  const lb_data = $('<div class="leaderbord_data_rows">');
  const players = result.players;
    const myPid = result.player.id;

    let disp = 0;

    const noTime = !leadIsTime[LeadID];

  for (let i = 0; i<players.length; i++) {
    const p = players[i];
    const avatar = p.avatar || 'avatar.png';
    let nick = p.name || (lang === 'ru' ? "Аноним" : "Anonymous");
	
	if(p['score'] == 999999){
		continue;
	}
	
	disp++;
    const score = noTime ? p['score'] : timeToString(p['score']);

    lb_data.append(getRow([
      getColumn(['<span>№' + parseInt(i + 1) + ' </span>']),
      getColumn("<img src='" + avatar + "'>"),
      getColumn('<span>' + nick + '</span>').css(p.id === myPid ? {'color':'lime'} : { }),
      getColumn('<span>' + score + '</span>')
    ]));
  }
  
  if (disp === 0)
{
    lb_data.html(lang === 'ru' ? "<p><center>Пусто</center></p>" : "<p><center>Empty</center></p>");
}

const o = getOverlay();
o.append(
    $('<div class="leaderbords">').append(getCurlb()),
    $('<p>').append(
      $('<button class="button2">').text(lang === 'ru' ? 'Назад' : 'Back').click(function() {
        $('.overlay').remove();
    showleads.showleadsLock = false;
})
    )
  ).hide().show(200);

function getCurlb()
{
    return $('<div class="leaderbord">').append([
      $('<h3>').text(leadCaption[LeadID][window.lang]),
      $('<div class="leaderbord_data">').append(lb_data)
    ]);
  }

  function getRow(data)
{
    return $('<div class="row">').append(data);
}

function getColumn(data)
{
    return $('<div class="col">').append(data);
}
}

function timeToString(val) {
  const mm = Math.floor(val / 60);
  const ss = val % 60;

  const mmStr = mm < 10 ? "0" + mm : mm.toString();
  const ssStr = ss < 10 ? "0" + ss : ss.toString();

  return mmStr + " : " + ssStr;
}