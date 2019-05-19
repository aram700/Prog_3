var socket = io();
var n = 5;


var side = 50;
function setup() {
	frameRate(5);
	createCanvas(n * side, n * side);
	background('#acacac');
	noStroke();

}

a = 1;
function seasonAction(RGB) {
	red = RGB.R;
	green = RGB.G;
	blue = RGB.B;
}
function drawWorld(matrix) {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill(red, green, blue);
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 1 && a == 3) {
				fill("#FFE200");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 1 && a == 4) {
				fill("white");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 0) {
				fill('#acacac');
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
		}
	}
}

function matrixReset() {
	socket.emit('reset');
}
function matrixClear() {
	socket.emit('clear');
}
function addAnimal() {

	xy = {
		x: document.getElementById('inputx').value,
		y: document.getElementById('inputy').value,
		type: document.getElementById('animaltype').value
	}
	socket.emit('addanimal', xy);
}
socket.on('season', seasonAction)
socket.on('send matrix', drawWorld);











