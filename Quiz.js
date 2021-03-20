class Quiz{
    constructor(){}

    getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if (gameState === 0) {
           contestant = new contestant();
           var contestantCountRef = await database.ref('ContestantCount').once("value");

        }
        if (ContestantCountRef.exists()){
            contestantCount = ContestantCountRef.val();
            Contestant.getCount();
        }
       question = new Question();
       question.display(); 
    }

}