grassArr = [];
xotakerArr = [];
virusArr = [];
avastArr = [];
amenakerArr = [];
gishatichArr = [];

Grass = require('./grass.js');
Xotaker = require('./grasseater.js');
Virus = require('./virus.js');
Avast = require('./avast.js');
Amenaker = require('./alleater.js');
Gishatich = require('./predator.js');

matrix = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 2, 0],
    [1, 0, 0, 0, 0]
]



var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(4567);

function start() {
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
RGB = {
    R: 255,
    G: 255,
    B: 255,
    season: 'winter'
}
time = 0;
function startgame() {
    if (time >= 0 && time < 51) {
        RGB.R -= 5;
        RGB.B -= 5;
        time++;
    }
    else if (time >= 51 && time < 102) {
        RGB.R += 5;
        time++;
    }
    else if (time >= 102 && time < 153) {
        RGB.B += 5;
        time++;
    }
    else if (time >= 153) {
        time = 0;
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
    io.sockets.emit('send matrix', matrix);
    io.sockets.emit('season', RGB);
}
function resetMatrix() {
    xotakerArr = [];
    grassArr = [];

    matrix = [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 2, 0],
        [1, 0, 0, 0, 0]
    ]
    start();

}
function clearMatrix() {
    matrix = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]

    ];
    xotakerArr = [];
    grassArr = [];
    virusArr = [];
    avastArr = [];
    amenakerArr = [];
    gishatichArr = [];
}
function animalAdd(xy) {
    if (xy.type == 'grass') {
        grassArr.push(new Grass(xy.x, xy.y));
    }
    else if (xy.type == 'grass eater') {
        xotakerArr.push(new Xotaker(xy.x, xy.y));
    }
    else if (xy.type == 'all eater') {
        amenakerArr.push(new Amenaker(xy.x, xy.y));
    }
    else if (xy.type == 'predator') {
        gishatichArr.push(new Gishatich(xy.x, xy.y));
    }
    else if (xy.type == 'virus') {
        virusArr.push(new Virus(xy.x, xy.y));
    }
    else if (xy.type == 'avast' || xy.type == 'antivirus') {
        avastArr.push(new Avast(xy.x, xy.y));
    }
    else {
        console.log(xy.type + ' not defined')
    }
    start();
}
function autostab(){
    if(grassArr = []){
        grassArr.push(new Grass(3,3));
    }
}
io.on('connection', function (socket) {
    socket.on('checkboxk', autostab)
    socket.on('reset', resetMatrix);
    socket.on('clear', clearMatrix);
    socket.on('addanimal', animalAdd);
})
start();
setInterval(startgame, 100);