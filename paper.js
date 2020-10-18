class paper extends baseClass 
{
	constructor(x,y,r)
	{
		super (x,y,70);

		this.image = loadImage("sprites/paper.png");

		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			

			}

			
			
		
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			super.display();		
	}

}