class papper {
    constructor(){
        var options={
isStatic:false,
restitution:1.0,
friction:0.5,
density:1.2
        }
        this.body=Bodies.rectangle(100,200,50,50,options);
        World.add(world,this.body);
    
    }
    display(){
        var pos=this.body.position;
        
      ellipseMode(RADIUS)
        fill(255);
    ellipse(pos.x,pos.y,20,20);
        
    }
}