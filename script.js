var socket = io();
var n = 10;


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
ischecked = false;
checkedRed = 255;
checkedBlue = 255;
checkedGreen = 255;

function takeRGB(varForWeather) {
	ischecked = varForWeather.checked;
	checkedRed = varForWeather.r;
	checkedGreen = varForWeather.g;
	checkedBlue = varForWeather.b;
}

function drawWorld(matrix) {
	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {
			if (ischecked == false) {
				if (matrix[y][x] == 1) {
					fill(red, green, blue);
					rect(x * side, y * side, side, side);
				}
			}
			else if (ischecked) {
				if (matrix[y][x] == 1) {
					fill(checkedRed, checkedGreen, checkedBlue);
					rect(x * side, y * side, side, side);
				}
			}

			if (matrix[y][x] == 0) {
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
function checkthebox() {
	checkbox = document.getElementById('checkbox1').checked;
	socket.emit('checkboxk', checkbox);
}
function checkWeather(){
	checkradio1 = document.getElementById('chooseWeather1').checked;
	checkradio2 = document.getElementById('chooseWeather2').checked;
	checkradio3 = document.getElementById('chooseWeather3').checked;
	checkradio4 = document.getElementById('chooseWeather4').checked;
	checkradio5 = document.getElementById('chooseWeather5').checked;
	selectedRadio = 0;
	if (checkradio1) {
		selectedRadio = 0;
		checkradio2 = false;
		checkradio3 = false;
		checkradio4 = false;
		checkradio5 = false;
	}
	if (checkradio2) {
		selectedRadio = 1;
		checkradio1 = false;
		checkradio3 = false;
		checkradio4 = false;
		checkradio5 = false;
	}
	if (checkradio3) {
		selectedRadio = 2;
		checkradio1 = false;
		checkradio2 = false;
		checkradio4 = false;
		checkradio5 = false;
	}
	if (checkradio4) {
		selectedRadio = 3;
		checkradio1 = false;
		checkradio3 = false;
		checkradio2 = false;
		checkradio5 = false;
	}
	if (checkradio5) {
		selectedRadio = 4;
		checkradio1 = false;
		checkradio3 = false;
		checkradio4 = false;
		checkradio2 = false;
	}
	socket.emit('selectedRadio', selectedRadio);

}


setInterval(checkthebox, 100);
setInterval(checkWeather, 100);
socket.on('answer of radio', takeRGB);
socket.on('season', seasonAction);
socket.on('send matrix', drawWorld);











