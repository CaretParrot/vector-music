const Vector = function (tail = [0, 0, 0], tip = [0, 0, 0]) {
    this.coords = [tail, tip];
    this.posVector = true;
    
    for (let i = 0; i < tail.length; i++) {
        if (tail[i] !== 0) {
            this.posVector = false;
            break;
        }
    }

    this.getCoords = function () {
        return this.coords;
    }

    this.setCoords = function (tail, tip) {
        this.coords = [tail, tip];
    }

    this.isPosVector = function () {
        return this.posVector;
    }

    this.getMagnitude = function () {
        return Math.pow((this.coords[1][0] - this.coords[0][0]) ** 2 + (this.coords[1][1] - this.coords[0][1]) ** 2 + (this.coords[1][2] - this.coords[0][2]) ** 2, 1 / 2);
    }

    this.getPosVector = function () {
        return new Vector([0, 0, 0], [this.coords[1][0] - this.coords[0][0], this.coords[1][1] - this.coords[0][1], this.coords[1][2] - this.coords[0][2]]);
    }

    this.getUnitVector = function () {
        let tempVector = this.getPosVector();
        let magnitude = tempVector.getMagnitude();

        for (let i = 0; i < tempVector.getCoords()[1].length; i++) {
            tempVector.coords[1][i] /= magnitude;
        }

        return tempVector;
    }
}