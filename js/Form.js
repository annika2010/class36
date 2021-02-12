class Form {
  constructor() {
    
  }

  display(){

    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      //to update name in the database from a player class function
      player.update(name)
      // TO UPDATE THE NUMBER OF PLAYERS
      player.updateCount(playerCount);

      //to greet the player when they click on play button
      var greeting = createElement('h3');
      greeting.html("Hi there " + name + "!!" );
      greeting.position(130, 160)

      var greeting2 = createElement('h4');
      greeting2.html("Hope you enjoy playing :)" );
      greeting2.position(100, 200)
    });

  }
}
