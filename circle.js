var scr = document.getElementById('first');

scr.width = window.innerWidth;
scr.height =  window.innerHeight;

var c = scr.getContext('2d');

 var mouse = {
 	x: undefined,
 	y: undefined
 }

 window.addEventListener('mousemove',
 	function(event){
 		mouse.x = event.x;
 		mouse.y = event.y;
 })
 	var colorArray = [
 		'#2ecc71','#3498db','#e74c3c','#2c3e50'
 		,'#f1c40f'
 	];	
 	var maxRadius = 100;

function Circle(x,y,dx,dy,radius,colour){
	this.x = x;
	this.y = y;	
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.colour = colour;
	this.draw = function(){
		c.beginPath(); 
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.fillStyle = this.colour;
		
	    c.fill();
	}
	this.update = function(){
		if(this.x+ this.radius >=innerWidth || this.x -this.radius<0){
		this.dx = -this.dx;
	}
	 if(this.y+ this.radius >= innerHeight || this.y - this.radius<0){
		this.dy= -this.dy;

	}
		this.x += this.dx;
		this.y += this.dy;
		
		// interactivity
		if(mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - this.y < 80 && mouse.y - this.y > -80 && this.radius<= 90){
			this.radius +=3; 
			console.log(radius);

		}
 		else if( this.radius > 5.5 ){
 			this.radius -= 2;
 		}	

 		this.draw();
	}

}	
	var array = [];
		for( var i =0; i<500; i++)
	  {	
		var dx =(Math.random()-0.5)*10; 
		var dy = (Math.random()-0.5)*10; 
		var x = Math.random()*innerWidth;
		var y = Math.random()*innerHeight;
		var radius = 5.5;
		var colour = colorArray[Math.floor(Math.random()*5)];
		array.push(new Circle(x,y,dx,dy,radius,colour));
	 }

	 function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,scr.width,scr.height);
		

		for( var v=0; v<array.length; v++){
		array[v].update();
	 }

}
animate();


