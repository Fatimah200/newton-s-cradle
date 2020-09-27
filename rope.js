//created constraint to hold our two bodies together
class rope{
    //passing argument and making sure it will connect to these two bodies
        constructor(body1,body2,offsetX,offsetY){
            this.offsetX=offsetX;
            this.offsetY=offsetY;
    //created options
        var options={
            //allowed totouch  body a and b
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            //created siffnes so that it had timed result before going back to constant state
            siffness:0.04,
            //gave it a lenght so we dont have to give it one
            lenght:10
    
        }
        //created constraint
        //added it to our world
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    
    }
    display(){
        //created point a and b so it will be connected to the bodies and copy when moving thier conditions
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    //created stroke weight so we can see the line
    strokeWeight(3);

    var Anchor1X=pointA.x;
    var Anchor1Y=pointA.y;

    var Anchor2X=pointB.x+this.offsetX;
    var Anchor2Y=pointB.y+this.offsetY;
    
    //give it same points as body a and b 
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    }