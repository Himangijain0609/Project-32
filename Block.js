class Block {
    constructor(x,y){
        var options={
           restitution: 0.4
        }
this.width=30;
this.height=40;
        this.body=Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body)
        this.visible = 255;
    }
    display(){
        if (this.body.speed<3){
            var pos= this.body.position;
            push();
            rectMode(CENTER);
            translate(pos.x,pos.y);
            rect(0,0,this.width,this.height);
            pop();
        }
       else{
           World.remove(world,this.body)
           push();
           this.visible = this.visible -5;
           tint(255,this.visible)
           pop();
       }
    }

    getscore(){

        if(this.visible<=0&&this.visible>-100){
          
          score++;
        }
      }
}