class Form{
    constructor(){
         this.input = createInput("Name");
          this.button =createButton("PLAY");
          this.greeting=createElement("h3");  //greeting message
    }
   
    hide (){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
         //different DOM elements to be displayed while displaying the form
         var title=createElement("h2");   //h2 is the highest size of heading
         title.html("Car Racing Game");
         title.position(300,2);
 
           //rectangular box will appear
         this.input.position(400,200);
 
         
          this.button.position(520,300);
          this.button.mousePressed ( ()=> {
              this.input.hide();
              this.button.hide();
              player.name=this.input.value();
              playerCount+=1;//2
              player.index=playerCount;//1p1=1,p2=2
              player.updateCount(playerCount);
              player.update();
              this.greeting.html("HELLO "+player.name +"WAIT ");
              this.greeting.position(250,200);
              //name ,playerCount 
          })
    }
}