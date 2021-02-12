class Player {
  constructor(){}

  //to read the playerCount from the database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  //to update the playerCount in the database
  //('/') to refer to the entire database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //to update the name of the player
  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}
