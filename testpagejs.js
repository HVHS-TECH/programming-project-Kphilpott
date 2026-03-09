console.log("why");

///A little setup for a test
const VELARRAY = [-1, 1];
function setup() {
	console.log("setup: wekonfgownfg");
	cnv = new Canvas(800, 800);
	world.gravity.y = 0;
	playerGroup = new Group();
	bob = new Sprite(180, 120, 40, 55, 'd');

	bob.color = 'red';
	bob.vel.x = 1;
	bob.bounciness = 0.7;
	bob.drag = 0.9;
	playerGroup.add(bob);
	console.log("setup: player completed");


	platform_1 = new Sprite(70, 500, 15, 850, 'k');
	platform_2 = new Sprite(500, 70, 850, 15, 'k');
	platform_3 = new Sprite(750, 500, 15, 850, 'k');
	platform_4 = new Sprite(500, 750, 850, 15, 'k');
	console.log("setup: walls done");

	alienGroup = new Group();
	aliens();
	console.log("Aliens Spawned")

};

function func2Call(_alien, _playerGroup) {

	// Delete the alien which was hit

	
	alienGroup.deleteAll();
	playerGroup.deleteAll();

	


}

function aliens() {

	for (i = 0; i < 10; i++) {

		alien = new Sprite(random(425, 475), random(425, 475), 20);
		alien.vel.x = random(4, 7) * random(VELARRAY);
		alien.vel.y = random(4, 7) * random(VELARRAY);
		alien.bounciness = 0.9;
		alien.friction = -0.0000001;
		alienGroup.add(alien);

	}
	alienGroup.collides(playerGroup, func2Call);
}



///Draw Loop
function draw() {
	background('white');

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

if (alienGroup.collides(playerGroup)){
	Text("Game Over!", 350, 350)
}

///pain, theres nothing online about this... cant make it do a game over screen

};




/// WORK ALREADY