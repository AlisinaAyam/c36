class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }

    getCount(){
         var playerCountRef=database.ref('playerCount');
         playerCountRef.on("value",function (data){
             playerCount = data.val();
         })
    }
    updateCount(count){
      database.ref('/').update({
          playerCount:count
      })
    }
   //player.update(); 
    update(){
      var playerIndex="players/player" + this.index;// players player1:name dis
             database.ref(playerIndex).set({
                 name:this.name,
                 distance:this.distance
             })
    }
 
    //Player.getPlayerInfo();static functions are called by class name 
    static getPlayerInfo(){
        var playerInfoRef=database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }

}
//JSON
//allPLayers ={player1:{name:..,distance:0},player2:{name:..,distance:0},}
//allPlayers.player1.name ; allPlayers.player2.distance