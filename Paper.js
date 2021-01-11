//Paper blu-print and display
class Paper{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius, {'restitution':0.3, 'friction':0.5, 'density':1.2});
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        translate(pos.x, pos.y);
        fill("pink");
        ellipse(0, 0, this.radius);
        pop();
    }
}