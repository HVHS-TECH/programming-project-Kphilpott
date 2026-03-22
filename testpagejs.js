console.log("START");

///A little setup for a test
const VELARRAY = [-1, 1];
const LENGTH = 680;
const HEIGHT = 15;

function setup() {
	console.log("setup: Canvas and World");
	cnv = new Canvas(800, 800);
	world.gravity.y = 0;
	playerGroup = new Group();
	
	///Create the player named "bob"
	bob = new Sprite(180, 120, 30, 35, 'd');
	bob.color = 'red';
	bob.vel.x = 1;
	bob.bounciness = 0.7;
	bob.drag = 0.9;
	playerGroup.add(bob);
	console.log("setup: player completed");

     ///Walls, numbered in order of left top right bottom
	 //first two numbers in each line of code are the coordinates it spawns at!
	platform_1 = new Sprite(70, 410, HEIGHT, LENGTH, 'k');
	platform_2 = new Sprite(410, 70, LENGTH, HEIGHT, 'k');
	platform_3 = new Sprite(750, 410, HEIGHT, LENGTH, 'k');
	platform_4 = new Sprite(410, 750, LENGTH, HEIGHT, 'k');
	platform_1.color = 'blue';
	platform_2.color = 'blue';
	platform_3.color = 'blue';
	platform_4.color = 'blue';
	console.log("setup: walls done");

	//create alien group and run function to spawn them, then log it.
	alienGroup = new Group();
	aliens();
	console.log("Aliens Spawned")
};

function func2Call(_alien, _playerGroup) {

	// Delete the aliens and player when they touch, requiring a page reload after.
	alienGroup.deleteAll();
	playerGroup.deleteAll();

}

function aliens() {
    //spawn 10 "aliens"
	for (i = 0; i < 10; i++) {

		alien = new Sprite(random(425, 475), random(425, 475), 20);
		alien.vel.x = random(0.5, 0.7) * random(VELARRAY);
		alien.vel.y = random(0.5, 0.7) * random(VELARRAY);
		alien.bounciness = 1;
		alien.friction = -0.0000001;
		alien.drag = -0.06;
		alien.color = 'green';
		alienGroup.add(alien);
        
	}
	alienGroup.collides(playerGroup, func2Call);
}



///Draw Loop
function draw() {
	background('white');


	//movement controls
	if (kb.pressing('left')) {
		bob.vel.x = -3.5;
	}

	else if (kb.pressing('right')) {
		bob.vel.x = 3.5;
	}

	else if (kb.pressing('up')) {
		bob.vel.y = -3.5;
	}

	else if (kb.pressing('down')) {
		bob.vel.y = 3.5;
	}


	//failed code
if (alienGroup.collides(playerGroup)){
	Text("Game Over!", 350, 350)
}

///pain, theres nothing online about this... cant make it do a game over screen

};




/// WORK ALREADY