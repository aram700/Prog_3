class Base {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 5;
        this.multiply = 1;
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
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}






class Grass extends Base {

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 2 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
//---------------------------------------------------------------------------
class Xotaker extends Base {
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
        if (this.energy >= 1) {
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
        if (this.energy == 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    this.energy = 5;
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}

//------------------------------------------------------------------------------------------------

class Gishatich extends Base {
    constructor(x, y) {
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
        if (this.energy >= 4) {
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

//---------------------------------------------------------------------------

class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 2;
        this.directions = [];
        this.multiply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.satkel();
        }
    }
    bazmanal() {
        if (this.energy == 5) {
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 2;
        }
    }
    utel2() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(1));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 4;
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    this.energy++;
                    this.bazmanal()
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    utel1() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(2));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 4;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    this.energy++;
                    this.bazmanal()
                }
            }
        }
        else {
            this.utel2();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(3));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 4;
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    this.energy++;
                    this.bazmanal()
                }
            }
        }
        else {
            this.utel1();
        }
    }
    satkel() {
        if (this.energy == 0) {
            for (var i in amenakerArr) {
                if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}

//---------------------------------------------------------------------------
class Virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.energy = 2;
        this.multiply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            matrix[this.y][this.x] = 5;
        }
        else {
            this.utel3()
        }
    }


    bazmanal() {
        if (this.energy == 5) {
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
                    grassArr.splice(i, 1)
                    this.energy++;
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
    }
}

//---------------------------------------------------------------------------
class Avast {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.multiply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            matrix[this.y][this.x] = 6;
        }
        else {
            this.sharjvel1();
        }
    }
    sharjvel1() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 6;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var uteliq = random(this.yntrelVandak(5));
        if (uteliq) {
            matrix[this.y][this.x] = 0;
            this.x = uteliq[0];
            this.y = uteliq[1];
            matrix[this.y][this.x] = 6;
            for (var i in virusArr) {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                    virusArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
}

//!!!!!!!Ուշադրություն, ինձ, ինչպես նաև գրեթե բոլոր ուսանողների մոտ կա մի խնդիր.
// խաղի միջի խոտերը ամբողջությամբվեռանում են, !բայց! չգիտես որտեղից մի հատ խոտ ծլում ու 
// սկսում է բազմանալ, ինձ ասել են որ զանգվածի միջից խոտերը ամբողջությամբ չեն
// ջնջվել: Խնդրում եմ սառը չդատել ;-)
// Շնորհակալություն ուշադրության համար: 