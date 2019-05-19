var random = require("./random");
Base = require('./class.js');
module.exports = class Gishatich extends Base {
    constructor(x, y) {
        super(x,y)
        this.x = x;
        this.y = y;
        this.multiply = 0;
    }
    
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.satkel();
        }
        else {
            this.sharjvel2()
        }
    }
    sharjvel2() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.satkel();
        }
    }
    bazmanal() {
        if (this.energy >= 10) {
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 2;
        }
    }
    utel1() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(2));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    this.energy += 2;
                    this.bazmanal();
                }
            }
        }
        else {
            this.sharjvel()
        }
    }
    satkel() {
        if (this.energy <= 0) {
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
}
