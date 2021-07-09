class BALL
{
  constructor(x, y, r) 
  {
    let options = {
      isStatic:false,
     restitution:0.8
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke("red");
    fill("black");
    ellipse(pos.x, pos.y, this.r);
    pop();
  }
  
}
