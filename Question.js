class Question {
    constructor() {
      this.input = createInput("Enter your name");
      this.input1 = createInput("Enter your answer");
      this.greeting = createElement('h3');
    }
    hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
  
    }
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(130, 0);
  
      this.input.position(130, 160);
      this.input1.position(430, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.input1.hide();
        this.button.hide();
  
        Contestant.name = this.input.value();
        
        ContestantCount+=1;
        Contestant.index=ContestantCount;
        Contestant.update();
        Contestant.updateCount(ContestantCount);
      });
  
    }
  }
  