class Paper {
    constructor(x, y,radius) {
      var options = {
          //isStatic:true,
          'restitution':0.8,
          'friction':1,
          'density':1.2
        
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(0,0,10,10);
      pop();
    }
  };