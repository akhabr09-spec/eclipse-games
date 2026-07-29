var GAMES_DATA = [
  {id:"monster-truck-2d",title:"Monster Truck 2D",cat:"racing",featured:true,tags:"monster truck racing offroad 2d",desc:"Offroad monster truck racing game"},
  {id:"geometrical-dash",title:"Geometrical Dash",cat:"action",featured:true,tags:"geometry dash jump action hard",desc:"Challenging jump and run action game"},
  {id:"gangster-v",title:"Gangster V",cat:"shooting",featured:false,tags:"gangster shooting action city",desc:"Action-packed shooting game"},
  {id:"om-nom-run",title:"Om Nom Run",cat:"action",featured:true,tags:"om nom run endless adventure",desc:"Fun endless runner with Om Nom"},
  {id:"cat-and-granny-2",title:"Cat and Granny 2",cat:"puzzle",featured:false,tags:"cat granny puzzle stealth",desc:"Puzzle adventure with the little cat"},
  {id:"oozys-lab",title:"Oozy's Lab",cat:"puzzle",featured:false,tags:"lab science puzzle experiment",desc:"Science lab puzzle game"},
  {id:"keyboard-escape-1-speed",title:"Keyboard Escape",cat:"action",featured:false,tags:"keyboard escape speed reflex",desc:"Fast-paced speed and reflex game"},
  {id:"the-cat-in-yellow",title:"The Cat in Yellow",cat:"adventure",featured:false,tags:"cat adventure platformer",desc:"Adventure with the yellow cat"},
  {id:"rainbow-pony-caring",title:"Rainbow Pony",cat:"simulation",featured:false,tags:"pony caring simulation kids",desc:"Pet care simulation game"},
  {id:"commando-gun-shooting",title:"Commando Shooting",cat:"shooting",featured:true,tags:"commando shooting fps action war",desc:"First-person shooting action game"},
  {id:"traffic-jam-3d",title:"Traffic Jam 3D",cat:"racing",featured:true,tags:"traffic car racing 3d",desc:"3D racing game - dodge cars in traffic"},
  {id:"counter-strike-pixel",title:"CS Pixel",cat:"shooting",featured:false,tags:"cs pixel shooting fps",desc:"Classic shooting game with pixel art"},
  {id:"beach-boxing",title:"Beach Boxing",cat:"action",featured:false,tags:"boxing beach fighting sports",desc:"Fun boxing game on the beach"},
  {id:"t-rex-game",title:"T-Rex NY",cat:"action",featured:false,tags:"t-rex dinosaur adventure endless",desc:"Dinosaur adventure in New York"},
  {id:"obby-crunchy-butter-escape",title:"Obby Escape",cat:"adventure",featured:false,tags:"obby escape obstacle parkour",desc:"Navigate through complex mazes"},
  {id:"wolf-robot-transform",title:"Wolf Robot",cat:"action",featured:false,tags:"wolf robot transform action car",desc:"Transform between wolf and robot"},
  {id:"russian-driver",title:"Russian Driver",cat:"racing",featured:false,tags:"russian car driving racing",desc:"Classic Russian car driving game"},
  {id:"real-city-bikes",title:"Real City Bikes",cat:"racing",featured:false,tags:"bike racing city motorcycle",desc:"Motorcycle racing in the city"},
  {id:"punch-master",title:"Punch Master",cat:"action",featured:false,tags:"punch boxing fighting action",desc:"Action fighting in the boxing ring"}
];

var GAMES_BASE = 'https://akhabr09-spec.github.io/eclipse-games';

function loadGamePortal() {
  var featured = GAMES_DATA.filter(function(g) { return g.featured; });
  if (featured.length) {
    var f = featured[0];
    document.getElementById('featuredHero').innerHTML =
      '<div class="hero-card">' +
      '<div class="hero-content">' +
      '<div class="hero-badge">Featured Game</div>' +
      '<h1 class="hero-title">' + e(f.title) + '</h1>' +
      '<p class="hero-desc">Play ' + e(f.title) + ' online for free. No download required. Instant play in your browser.</p>' +
      '<div class="hero-actions">' +
      '<a class="btn-primary" href="/p/games?game=' + f.id + '">Play Now</a>' +
      '<a class="btn-secondary" href="/p/games?game=' + f.id + '">Learn More</a>' +
      '</div></div></div>';
  }

  var grid = document.getElementById('gameGrid');
  if (!grid) return;
  
  GAMES_DATA.forEach(function(g) {
    var card = document.createElement('div');
    card.className = 'game-card' + (g.featured ? ' featured' : '');
    card.setAttribute('data-title', g.title);
    card.setAttribute('data-category', g.cat);
    card.setAttribute('data-tags', g.tags);
    
    var thumb = document.createElement('div');
    thumb.className = 'game-card-thumb';
    var icon = document.createElement('div');
    icon.className = 'thumb-icon';
    icon.textContent = '🎮';
    thumb.appendChild(icon);
    var overlay = document.createElement('div');
    overlay.className = 'play-overlay';
    var playIcon = document.createElement('div');
    playIcon.className = 'play-icon';
    playIcon.textContent = '▶';
    overlay.appendChild(playIcon);
    thumb.appendChild(overlay);
    
    var body = document.createElement('div');
    body.className = 'game-card-body';
    var title = document.createElement('div');
    title.className = 'game-card-title';
    title.textContent = g.title;
    var cat = document.createElement('div');
    cat.className = 'game-card-category';
    cat.textContent = g.cat.charAt(0).toUpperCase() + g.cat.slice(1);
    body.appendChild(title);
    body.appendChild(cat);
    
    card.appendChild(thumb);
    card.appendChild(body);
    card.onclick = function() { window.location.href = '/p/games?game=' + g.id; };
    grid.appendChild(card);
  });

  var countEl = document.getElementById('gameCount');
  if (countEl) countEl.textContent = GAMES_DATA.length + ' games';
}

function e(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
