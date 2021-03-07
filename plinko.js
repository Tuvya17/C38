class Plinko{
    constructor(x, y, r) {
        var options = {
             isStatic:true
            
        }
        
        this.body = Bodies.circle(x, y, r, options);
        
        this.x = x
        this.y = y
        this.r = r
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse( 0, 0, this.r,this.r);
        pop();
      }
}