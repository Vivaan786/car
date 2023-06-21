class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data)=> {
      playerCount = data.val();
    });
  }
  updateCount(Count) {
    database.ref("/").update({
      playerCount: Count
    });
  }
  addPlayer(){
   var playerIndex="players/player"+this.index;
   if(this.index === 1){
    this.positionX = width/2-100;
   }
 else{
  this.positionX = width/2+100;

 }
 database.ref(playerIndex).set({
  name:this.name,positionX:this.positionX,positionY:this.positionY
 })
 }
getDistance(){
  var playerDistanceRef=database.ref("players/player"+this.index)
  playerDistanceRef.on("value",data=>{
    var data=data.value()
    this.positionX = data.positionX;
    this.positionY = data.positionY;
  })
}
}
