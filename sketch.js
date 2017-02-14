//decalre array of bubble obkects
var bubbles = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	background('black');
}

function draw() {
  	//iterate through the array and call its methods
  	for(var i=0; i<bubbles.length; i++){
  		bubbles[i].display();
  		bubbles[i].move();
  	}
}

//add a Bubble object to the array on when someone clicks

function mouseClicked(){
	bubbles.push(new Bubble(mouseX, mouseY));
	console.log(bubbles);


}

function mousePressed(){
	for(var i=0; i<bubbles.length; i++){
		if(bubbles[i].poke()){
			//splice deletes an item from the array
			bubbles.splice(i, 1);
		}
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

//bubble object
function Bubble(theX, theY){
	//constructor - 
	this.x = theX;
	this.y = theY;
	this.size = random(15, 50);

	//methods
	this.display = function(){
		fill(random(255), random(255), random(255));
		stroke('');
		strokeWeight(0);
		arc(this.x, this.y, this.size, this.size, 0, PI+QUARTER_PI, PIE);
	}

	this.move = function(){
		//add random motion to each bubble
		this.x = this.x + random(-20, 20);
		this.y = this.y + random(-20, 20);
	}

	this.poke = function(){
		//check if the mouse overlaps with a bubble
		if( mouseX > (this.x-this.size/2) &&
			mouseX < (this.x+this.size/2) &&
			mouseY > (this.y-this.size/2) &&
			mouseY < (this.y+this.size/2) ){
			console.log(this.x + "," + this.y);
		return true;
		}else{
			return false;
		}

	}

}






