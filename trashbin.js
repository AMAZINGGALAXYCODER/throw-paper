class bin  {

    constructor(x,y) {
        var options = {
          isStatic : true
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
      }
      display(){
       
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        imageMode(CENTER);
        fill(255,0,0);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
    }  
