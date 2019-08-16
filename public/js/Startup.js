

function Startup() {

	const PLAYERSTARTVEC = new THREE.Vector3( 26, 5, 1 ) ;
	const STARTBUTTONPOS = 9 ;

	atlas.TempObstacle(
		"init_wall",
		new THREE.Vector3( 28, 15, 4 ),
		true
	);

	createChaserWall();

	function createChaserWall() {
		atlas.TempObstacle(
			"chaser_wall",
			new THREE.Vector3( 6, 15, 4 ),
			true
		);
	};

	square.moveTo( PLAYERSTARTVEC );

	return {
		startButtonPos: STARTBUTTONPOS,
		createChaserWall
	};

};