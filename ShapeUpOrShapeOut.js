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
    constructor(height, width) {
        this.div = document.createElement('div');
        this.div.className = 'shape';
        this.div.style.backgroundColor = color;
        this.div.style.height = height + 'px';
        this.div.style.width = width + 'px';
        this.area = height * width;
        this.perimeter = height * 2 + width * 2
        this.radius = 'N/A';
        this.render();
    }
    render() {
        this.getRandomCoords();
        document.getElementById('shapeContainer').appendChild(this.div);
        console.log(this.div)
    }
    getRandomCoords() {
        this.x = Math.floor(Math.random() * (600 - this.width));
        this.y = Math.floor(Math.random() * (600 - this.height));
    }
 
}



class rectangle extends shape {
    constructor(height, width) {
        super(height, width);
        this.name = 'rectangle';
        this.div.style.color = 'green';
    }
}

class square extends shape {
    constructor(height) {
        super(height, height);
        this.name = 'square'
        this.color = 'red';
    }
}

class circle extends shape {
    constructor(radius) {
        super(radius*2, radius*2);
        this.name = 'circle'
        this.color = 'purple';
        this.radius = radius;
        this.area = Math.PI * (height / 2) ** 2;
    }

}

class triangle extends shape {
    constructor(height) {
        super(height, height);
        this.name = 'triangle';
        this.color = 'yellow';
        this.area = (1 / 2) * height * height;
    }

}


