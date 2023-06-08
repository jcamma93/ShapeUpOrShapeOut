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


document.getElementById(rectangleButton).click(() => {
    
});

document.getElementById(squareButton).click(() => {
   
});

document.getElementById(circleButton).click(() => {
    
});

document.getElementById(triangleButton).click(() => {

});




class shape {
    constructor(name, color, height, width, radius, area, perimeter, coords) {
        this.div = document.createElement('div');
        this.div.className = 'shape';
        this.div.color = color;
        this.div.height = height;
        this.div.width = width;
        this.div.radius = radius;
        this.div.area = height * width;
        this.div.perimeter = height * 2 + width * 2
        this.div.radius = 'N/A';
        this.div.style =
        this.render();
    }
    render() {
        this.div = document.create('newShape');
        this.getRandomCoords();
        this.div.appendChild('shapeContainer');
    }
    getRandomCoords() {
        this.x = Math.floor(Math.random() * (600 - this.width));
        this.y = Math.floor(Math.random() * (600 - this.height));
    }

}



class rectangle extends shape {
    constuctor(color, height, height, area, perimeter) {
        super(color, height, height, area, perimeter);
        this.name = 'rectangle';
        this.color = 'green';
    }
}

class square extends shape {
    constuctor(color, height, width, area, perimeter, coords) {
        super(color, height, width, area, perimeter, coords);
        this.name = 'square'
        this.color = 'red';
    }
}

class circle extends shape {
    constuctor(color, height, width, radius, area, perimeter, coords) {
        super(color, height, width, radius, area, perimeter, coords);
        this.name = 'circle'
        this.color = 'purple';
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.area = Math.PI * (height / 2) ** 2;
    }

}

class triangle extends shape {
    constuctor(color, height, width, area, perimeter, coords) {
        super(color, height, width, area, perimeter, coords);
        this.name = 'triangle';
        this.color = 'yellow';
        this.area = (1 / 2) * height * width;
    }

}


