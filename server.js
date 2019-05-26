grassArr = [];
xotakerArr = [];
virusArr = [];
avastArr = [];
amenakerArr = [];
gishatichArr = [];

fs = require('fs');

Grass = require('./grass.js');
Xotaker = require('./grasseater.js');
Virus = require('./virus.js');
Avast = require('./avast.js');
Amenaker = require('./alleater.js');
Gishatich = require('./predator.js');

matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 2, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 3, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 2, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 3, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    start();

}
function clearMatrix() {
    matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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
function autostab(checkbox) {
    if (checkbox) {
        xx = Math.floor(Math.random() * 9);
        yy = Math.floor(Math.random() * 9);
        if (grassArr.length == 0) {
            grassArr.push(new Grass(xx, yy));
        }
        if (xotakerArr.length == 0) {
            xotakerArr.push(new Xotaker(xx, yy));
        }
        else if (xotakerArr.length >= 10) {
            xotakerArr.splice(10, 1);
        }
        if (gishatichArr.length == 0) {
            gishatichArr.push(new Gishatich(xx, yy));
        }
        else if (gishatichArr.length >= 7) {
            gishatichArr.splice(7, 1);
        }
        if (virusArr.length == 0) {
            virusArr.push(new Virus(xx, yy));
        }
        else if (virusArr.length >= 10) {
            virusArr.splice(10, 1);
        }
        if (avastArr.length == 0) {
            avastArr.push(new Avast(xx, yy));
        }
        else if (avastArr.length >= 2) {
            avastArr.splice(1, 1);
        }

    }
}
varForWeather = {
    checked: false,
    r: 255,
    g: 255,
    b: 255
}
function chooseWeather(selectedRadio) {
    if (selectedRadio == 0) {
        varForWeather.checked = false;
    }
    else if (selectedRadio == 1) {
        varForWeather.checked = true;
        varForWeather.r = 255;
        varForWeather.g = 255;
        varForWeather.b = 255;
    }
    else if (selectedRadio == 2) {
        varForWeather.checked = true;
        varForWeather.r = 100;
        varForWeather.g = 255;
        varForWeather.b = 100;
    }
    else if (selectedRadio == 3) {
        varForWeather.checked = true;
        varForWeather.r = 0;
        varForWeather.g = 255;
        varForWeather.b = 0;
    }
    else if (selectedRadio == 4) {
        varForWeather.checked = true;
        varForWeather.r = 255;
        varForWeather.g = 255;
        varForWeather.b = 0;
    }
    io.sockets.emit('answer of radio', varForWeather);
}

var statistics = {
    "gArr": grassArr,
    'xArr': xotakerArr,
    'vArr': virusArr,
    'aArr': avastArr,
    'amArr': amenakerArr,
    'giArr': gishatichArr
}

setInterval(function () {
    statistics.gArr = grassArr.length,
        statistics.xArr = xotakerArr.length,
        statistics.vArr = virusArr.length,
        statistics.aArr = avastArr.length,
        statistics.amArr = amenakerArr.length,
        statistics.giArr = gishatichArr.length,

        fs.writeFile('statistics.json', JSON.stringify(statistics))
    io.sockets.emit('statistics', statistics);


}, 50);




io.on('connection', function (socket) {
    socket.on('checkboxk', autostab)
    socket.on('reset', resetMatrix);
    socket.on('clear', clearMatrix);
    socket.on('addanimal', animalAdd);
    socket.on('selectedRadio', chooseWeather);
})
start();
setInterval(startgame, 250);