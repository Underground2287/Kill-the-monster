class HeroClass{
    constructor(x, y, r) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/Superhero-01.png");
        this.body = Bodies.circle(x, y, (this.r)/2, options);
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y-100);
        rectMode(CENTER)
        //rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+50, this.r);
        pop();
      }
}