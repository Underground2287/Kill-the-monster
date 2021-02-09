const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var rope;

function preload() {
    backdrop=loadImage("images/GamingBackground.png");

}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    hero = new HeroClass(400,800,250);
    rope = new Rope(hero.body, { x: 500, y: 50 });
    monster = new MonsterClass(1100,550,300);
    box1 = new BoxClass(600, 100, 70, 70);
    box2 = new BoxClass(900, 100, 70, 70);
    box3 = new BoxClass(900,100,70,70);
    box4 = new BoxClass(900,100,70,70);
    box5 = new BoxClass(900,100,70,70);
    box6 = new BoxClass(900,100,70,70);
    box7 = new BoxClass(900,100,70,70);
    box8 = new BoxClass(900,100,70,70);

    box9 = new BoxClass(800,100,70,70);
    box10 = new BoxClass(800,100,70,70);
    box11 = new BoxClass(800,100,70,70);
    box12 = new BoxClass(800,100,70,70);

    box13 = new BoxClass(700,100,70,70);
    box14 = new BoxClass(700,100,70,70);
    box15 = new BoxClass(700,100,70,70);
    box16 = new BoxClass(700,100,70,70);
    box17 = new BoxClass(700,100,70,70);
    box18 = new BoxClass(700,100,70,70);
    box19 = new BoxClass(700,100,70,70);
    box20 = new BoxClass(700,100,70,70);

    // ball = new BallClass(200,200,80,80);
}

function draw(){
    background(backdrop);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    rope.display();
    hero.display();
    monster.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    // ball.display();
    // rope.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


// function mouseReleased(){
//     slingshot.fly();
//     gameState="launched";
// }

// function keyPressed(){
//     if(keyCode === 32){
//     //slingshot.attach(bird.body);
//     }
// }