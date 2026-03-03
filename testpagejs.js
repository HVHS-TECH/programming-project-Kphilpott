console.log("why");

///A little setup for a test
function setup() {
	console.log("setup: wekonfgownfg");
    cnv = new Canvas(800, 800);
	world.gravity.y = 10;
    playerGroup = new group();
	bob = new Sprite(180, 120, 40, 55, 'd');

    bob.color = 'red';

	bob.rotationSpeed = -22;
    bob.vel.x = 1;
	bob.bounciness = 0.7;
	bob.drag = 0.6;
    playerGroup.add(bob);
    console.log("setup: player completed");








	platform_1 = new Sprite(70, 500, 15, 850, 'k');
	platform_2 = new Sprite(500, 70, 850, 15, 'k');
	platform_3 = new Sprite(750, 500, 15, 850, 'k');
	platform_4 = new Sprite(500, 750, 850, 15, 'k');
	console.log("setup: walls done");



}




///Draw Loop
function draw() {
	background('white');
}




/// WORK ALREADY