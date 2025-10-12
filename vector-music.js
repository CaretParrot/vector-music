const Graph = function (element, stroke = "white", strokeWidth = 5) {
    this.element = element;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;

    element.setAttribute("transform", "scale(1, -1)");

    this.addVector = function (vector) {
        let newVector = vector;
        if (vector instanceof PosVector) {
            newVector = vector.getVector();
        }
        this.element.innerHTML += `<line x1=${newVector.getCoords()[0][0]} y1=${newVector.getCoords()[0][1]} x2=${newVector.getCoords()[1][0]} y2=${newVector.getCoords()[1][1]} style="stroke: ${this.stroke}; stroke-width: ${this.strokeWidth}" marker-end="url(#arrow)" />`;
    }
}

const MusicVector = function (frequencyIndex = 48, duration = 1, properties) {
    this.frequencyIndex = frequencyIndex;
    this.duration = duration;
    this.properties = properties;
}