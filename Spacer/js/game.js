window.onload = function () {
	var config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			backgroundColor: 0xff0000,
			scene: {
					preload: preload,
					create: create,
					update: update
			}
	};

	var game = new Phaser.Game(config);

	function preload ()
	{
	}

	function create ()
	{
		this.add.text(20, 20, "Loading ccdscsdcdscdsccsdccgame...");
	}

	function update ()
	{
	}
}
