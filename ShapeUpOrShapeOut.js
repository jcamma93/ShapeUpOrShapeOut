const shapeContainer = document.getElementById('shape-container');
let data = document.getElementById('p');

const rectangleButton = document.getElementById('rectangle-button');
const squareButton = document.getElementById('square-button');
const circleButton = document.getElementById('circle-button');
const triangleButton = document.getElementById('triangle-button');

let rectangleHeight = document.getElementById('rectangleHeight');
let rectangleWidth = document.getElementById('rectangleWidth');
let squareSideLength = document.getElementById('squareSideLength');
let circleRadius = document.getElementById('circleRadius');
let triangleHeight = document.getElementById('triangleHeight');


document.getElementById(rectangleButton)
rectangleButton.addEventListener("click", function () {
    if ((rectangleHeight >= 1 && rectangleHeight <= 600) && (rectangleWidth >= 1 && rectangleWidth <= 600)) {
        let rectangle = new rectangle(rectangleHeight, rectangleWidth);
    }
    else {
        alert("You must enter a height and width between 1 and 600.");
    }
});

document.getElementById(squareButton)
squareButton.addEventListener("click", function () {
    if (squareSideLength >= 1 && squareSideLength <= 600) {
        let square = new square(squareSideLength);
    }
    else {
        alert("You must enter a side length between 1 and 600.");
    }
});

document.getElementById(circleButton)
circleButton.addEventListener("click", function () {
    if (circleRadius >= 1 && circleRadius <= 300) {
        let circle = new circle(circleRadius);
    }
    else {
        alert("You must enter a radius between 1 and 300.");
    }
});

document.getElementById(triangleButton)
triangleButton.addEventListener("click", function () {
    if (triangleHeight >= 1 && triangleHeight <= 600) {
        let triangle = new triangle(triangleHeight);
    }
    else {
        alert("You must enter a height between 1 and 600.");
    }
});




class shape {
    constructor(height, width) {
        this.div = document.createElement('div');
        this.div.className = 'shape';
        this.div.style.backgroundColor = 'color';
        this.div.style.height = height + 'px';
        this.div.style.width = width + 'px';
        this.area = height * width;
        this.perimeter = height * 2 + width * 2
        this.radius = 'N/A';
        this.render();
        this.div.addEventListener("click", function () {
            this.describe();
        });
        this.div.addEventListener("dblclick", function () {
            this.removeShape()
        });
    }
    render() {
        this.getRandomCoords();
        document.getElementById('shapeContainer').appendChild(this.div);
    }
    getRandomCoords() {
        this.x = Math.floor(Math.random() * (600 - this.width));
        this.y = Math.floor(Math.random() * (600 - this.height));
    }
    describe() {
        document.getElementById('p').appendChild(this.data);
    }
    removeShape() {
        document.removeChild(this.div)
    }
}


class rectangle extends shape {
    constructor(height, width) {
        super(height, width);
        this.name = 'rectangle';
        this.div.style.backgroundColor = 'green';
    }
}

class square extends shape {
    constructor(height) {
        super(height, height);
        this.name = 'square'
        this.div.style.backgroundColor = 'red';
    }
}

class circle extends shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.name = 'circle'
        this.div.style.backgroundColor = 'purple';
        this.radius = radius;
        this.area = Math.PI * (height / 2) ** 2;
    }

}

class triangle extends shape {
    constructor(height) {
        super(height, height);
        this.name = 'triangle';
        this.div.style.backgroundColor = 'yellow';
        this.area = (1 / 2) * height * height;
    }

}
