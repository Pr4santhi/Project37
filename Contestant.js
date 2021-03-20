class Contestant {
    constructor(){
      this.index=null;
      this.name=null;
    }
  
    getCount(){
      var ContestantCountRef = database.ref('ContestantCount');
      ContestantCountRef.on("value",function(data){
        ContestatntCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        ContestantCount: count
      });
    }
  
    update(){
      var ContestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name
  
      });
    }
    static getContestantInfo(){
      var contestantInfoRef = database.ref("contestants");
      contestantInfoRef.on("value",(data)=>{
        allContestant=data.val();
      })
    }
  }
  