class Player{

    constructor(){

        this.name = null,
        this.index = null,
        this.kills = null,
        this.health = 100,
        this.shield = null,
        this.rank = null,
        this.damage = null

    }

    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          kills:this.kills,
          damage:this.damage,
          shield:this.shield,
        });
      }

}