class Drops{
constructor(x,y){
    var options = {
      'restitution':0.01,
      'friction': 0.1
    }
     this.x=x;
     this.y=y;
     this.body=Bodies.circle(x,y,5,options);
     this.r=5;
     World.add(world, this.body);
    }
    
    display(){
        var pos =this.body.position;
       ellipseMode (CENTER);
       fill("blue");
       ellipse(pos.x, pos.y, this.r,this.r);
      }
    
      update(){
          if (this.body.position.y > height){
              Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
          }
      }
    }