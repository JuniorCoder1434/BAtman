class Man extends baseClass {
    constructor(x,y){
      super(x,y,150,150);
      this.image = loadImage("walking_1.png");
      this.isSatic;
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }