class Graph {
    constructor(element, stroke = "white", strokeWidth = 5) {
        this.element = element;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.vectorList = [];

        element.setAttribute("transform", "scale(1, -1)");
        element.innerHTML += `<path d="M 0 0 L 4 2 L 0 4 z" fill="white" />`;
    }

    setVectorList(list) {
        this.vectorList = list;
        this.update();
    }

    update() {
        this.clear();
        for (let i = 0; i < this.vectorList.length; i++) {
            this.element.innerHTML += `<line x1=${this.vectorList[i].getCoords()[0][0]} y1=${this.vectorList[i].getCoords()[0][1]} x2=${this.vectorList[i].getCoords()[1][0]} y2=${this.vectorList[i].getCoords()[1][1]} style="stroke: ${this.stroke}; stroke-width: ${this.strokeWidth}" marker-end="url(#arrow)" />`;
        }
    }

    clear() {
        this.element.innerHTML = "";
    }
}

const MusicVector = function (frequencyIndex = 48, duration = 1, properties) {
    this.frequencyIndex = frequencyIndex;
    this.duration = duration;
    this.properties = properties;
}