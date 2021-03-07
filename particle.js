class Particle{
    constructor(x, y, r) {
        var options = {
             isStatic:false,
             restitution:0.5,
            
        }
        
        this.body = Bodies.circle(x, y, 10, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.x = x
        this.y = y
        this.r = 10
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse( 0, 0, this.r,this.r);
        pop();
      }
}