class Game{
    constructor(){}

    getState(){
     var gameStateRef=database.ref("gameState");
     gameStateRef.on("value",function (data){
        gameState=data.val();
    
    })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value"); //.on
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
      }

    play(){
        //hide the form elements   
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        //get the information of all players from database
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var display_position = 130;
            //for in loop
            for(var plr in allPlayers){
                if (plr === "player" + player.index)
            fill("red")
            else
            fill("black");
             display_position+=20;
            textSize(15);
            //allPlayers[plr].name ; allPlayers.player2.distance
            text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120,display_position);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }
    }
    
}