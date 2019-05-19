Base = require('./class.js');
var random = require("./random");
module.exports = class Virus extends Base {
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
            matrix[this.y][this.x] = 5;
        }
        else {
            this.utel3()
        }
    }


    bazmanal() {
        if (this.energy >= 20) {
            virusArr.push(new Virus(this.x, this.y));
            this.energy = 2;
        }
    }
    utel3() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(1));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 5;
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    if (grassArr[i].immunitet >= 1) {
                        grassArr[i].immunitet--;
                        this.energy++;
                    }
                    else {
                        grassArr.splice(i, 1)
                        this.energy++;
                    }
                    break;
                }
            }
        }
        else if (matrix[this.y][this.x] = 2) {
            this.utel2();
        }
        else if (matrix[this.y][this.x] = 3) {
            this.utel1();
        }
        else if (matrix[this.y][this.x] = 4) {
            this.utel();
        }
        this.bazmanal();
    }

    utel2() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(2));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 5;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    this.energy++;
                }
            }
        }
        else if (matrix[this.y][this.x] = 3) {
            this.utel1();
        }
        else {
            this.utel();
        }
        this.bazmanal();
    }
    utel1() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(3));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 5;
            this.energy++;
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
        else {
            this.utel();
        }
        this.bazmanal();
    }

    utel() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(4));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 5;
            for (var i in amenakerArr) {
                if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1);
                    this.energy++;
                }
            }
        }
        else {
            this.sharjvel();
        }
        this.bazmanal();
    }

}
