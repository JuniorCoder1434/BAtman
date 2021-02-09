class RainDrops{
        constructor(x,y,width,height) {
          var options = {
              isStatic: false
          }
          this.body = Bodies.rectangle(width,height,options);
          
          this.image = loadImage("booond.png")
          World.add(world, this.body);

          var maxDrops = 100;
          for(var i=0; i<maxDrops; i++){
            drops.push  (new RainDrops(random(0,900)), random(0,400))
          }
        }
        display(){
        
          rectMode(CENTER);
          fill("blue");
          rect(pos.x, pos.y, this.width, this.height);
        }
      
    
}