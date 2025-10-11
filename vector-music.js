const Graph = function (element, stroke = "white", strokeWidth = 5) {
    this.element = element;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;

    element.setAttribute("transform", "scale(1, -1)");
    element.innerHTML += `<defs><marker id="arrow" markerWidth="20" markerHeight="20" refX="0" refY="2" orient="auto"><path d="M 0 0 L 4 2 L 0 4 z" fill="${this.stroke}" /></marker></defs>`;

    this.addVector = function (Vector) {
        this.element.innerHTML += `<line x1=${Vector.getCoords()[0][0]} y1=${Vector.getCoords()[0][1]} x2=${Vector.getCoords()[1][0]} y2=${Vector.getCoords()[1][1]} style="stroke: ${this.stroke}; stroke-width: ${this.strokeWidth}" marker-end="url(#arrow)" />`;
    }
}

const MusicVector = function (frequencyIndex = 48, duration = 1, properties) {
    this.frequencyIndex = frequencyIndex;
    this.duration = duration;
    this.properties = properties;
}