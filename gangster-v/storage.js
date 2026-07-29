async function storage(loadcallback){
  if(window.ysdk != null){

    ysdk.getPlayer().then(player => {

    player.getData().then(data => {
      window.playerUID = player.getUniqueID();
      console.log("data load");
      console.log(data);

      storage.get = function(key){
        return data[key];
      }
      storage.set = function(key,value){
        data[key] = value;
      }

      storage.push = function(){
        player.setData(data).then(() => {
          console.log('yandexsdk cloud push seccuss');
        });
      }

      storage.type = 1;

      storage.getraw = function(){
        return data;
      }

      loadcallback();
      console.log("storage bind yandexsdk cloud");
    }).catch(err => {
      lssave();
    });

    }).catch(err => {
      lssave();
   });
  } else if(window.gp != null) {
    await gp.player.ready;
    storage.get = function(key){
      return gp.player.get(key);
    }
    storage.set = function(key,value){
      gp.player.set(key,value);
    }
    storage.push = function(){
      gp.player.sync();
    }
    storage.getraw = function(){
      return null;
    }
    storage.type = 1;
	console.log("storage bind gamepush");
    loadcallback();
  }
  else{
	  lssave();
  }

  function lssave(){
    console.log("storage bind localStorage");
    storage.get = function(key){
      return localStorage[key];
    }
    storage.set = function(key,value){
      localStorage[key] = value;
    }
    storage.push = function(){

    }
    storage.getraw = function(){
      var obj = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        obj[key] = value;
      }
      return obj;
    }
    storage.type = 0;
    loadcallback();
  }
}
