class Graph {
    constructor(id, stroke = "white", strokeWidth = 5) {
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.element.id = id;
        document.body.appendChild(this.element);
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.vectorList = [];

        this.element.setAttribute("transform", "scale(1, -1)");
        this.element.innerHTML += `<path d="M 0 0 L 4 2 L 0 4 z" fill="white" />`;
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
        this.element.innerHTML = `<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="white" /></marker>`;
    }
}

const MusicVector = function (frequencyIndex = 48, duration = 1, properties) {
    this.frequencyIndex = frequencyIndex;
    this.duration = duration;
    this.properties = properties;
}