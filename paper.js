 class crumpledpaper {

    constructor(x,y) {
        var options = {
           isStatic : false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        
        this.paper=loadImage("sprites/paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("white");
        imageMode(CENTER);
        
        image(this.paper,0,0,this.width,this.height)
        pop();
      }
    }  

