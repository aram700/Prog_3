var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var virusArr = [];
var avastArr = [];
var side = 10;
var matrix = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
]

function setup() {
	frameRate(5);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
	noStroke();
	for (var y = 0; y < matrix.length; ++y) {
		for (var x = 0; x < matrix[y].length; ++x) {
			if (matrix[y][x] == 1) {
				var q = new Grass(x, y);
				grassArr.push(q);
			}
			else if (matrix[y][x] == 2) {
				var w = new Xotaker(x, y);
				xotakerArr.push(w);
			}

			else if (matrix[y][x] == 3) {
				var e = new Gishatich(x, y);
				gishatichArr.push(e);
			}
			else if (matrix[y][x] == 4) {
				var r = new Amenaker(x, y);
				amenakerArr.push(r);
			}
			else if (matrix[y][x] == 5) {
				var t = new Virus(x, y);
				virusArr.push(t);
			}
			else if (matrix[y][x] == 6) {
				var u = new Avast(x, y);
				avastArr.push(u);
			}
		}
	}
}
function draw() {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill("green");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 2) {
				fill("yellow");
				rect(x * side, y * side, side, side);
			}

			else if (matrix[y][x] == 3) {
				fill("red");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 4) {
				fill("aqua");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 5) {
				fill("#90EE90");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 6) {
				fill("orange");
				rect(x * side, y * side, side, side);
			}
			else {
				fill("#acacac");
				rect(x * side, y * side, side, side);
			}
		}
	}
	for (var q in grassArr) {
		grassArr[q].bazmanal();
	}
	for (var q in xotakerArr) {
		xotakerArr[q].utel();
	}
	for (var q in gishatichArr) {
		gishatichArr[q].utel1();
	}
	for (var q in amenakerArr) {
		amenakerArr[q].utel1();
	}
	for (var q in virusArr) {
		virusArr[q].utel3();
	}
	for (var q in avastArr) {
		avastArr[q].utel();
	}
}











