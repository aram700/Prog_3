Base = require('./class.js');
var random = require("./random");
module.exports = class Xotaker extends Base {
    constructor(x, y) {
        super(x, y);
        this.index = 2;
 
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
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy >= 10) {
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy = 2;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(1));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);                  
                }
            }
        }
    }
}
