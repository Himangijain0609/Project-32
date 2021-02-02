class Slingshot{
	constructor(bodyA,pointB)
	{

		var options={ 
			bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:0.04, 
			length:1

		}


		this.pointB=pointB
		this.slingshot=Constraint.create(options)
		World.add(world,this.slingshot);
	}
       attach(bodyA){
		   this.slingshot.bodyA = bodyA 
	   }

	fly()
	{
		this.slingshot.bodyA=null;
	}

	display()
	{
		if(this.slingshot.bodyA)
		{
			var pointA=this.slingshot.bodyA.position;
			var pointB=this.pointB
            stroke("blue");
			strokeWeight(4);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
} 