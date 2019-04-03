// setup() is called when the program loads - creates a canvas and sets the background to white (255, 255, 255)
function setup() {
    createCanvas(400, 400)
    background(255);
}

// draws a house - a triangle on top and and a square beneath it.
function draw() {
    house();
    house2();
    house3();
}

// x and y coordinates of the square, and size parameter is the height and width of the square.
function square(x, y, size) {
    rect(x, y, size, size)
}

// creates a roof.
function roof() {
    fill(255, 130, 0)
    stroke(0)
    triangle(mouseX + (70/2), (mouseY - 50), mouseX + 70, mouseY, mouseX, mouseY)
}

function roof2() {
    fill(255, 130, 0)
    stroke(0)
    triangle(mouseX + (70/2) + 70, (mouseY - 50), mouseX + 70 + 70, mouseY, mouseX + 70, mouseY)
}

function roof3() {
    fill(255, 130, 0)
    stroke(0)
    triangle(mouseX + (70/2) + 140, (mouseY - 50), mouseX + 70 + 140, mouseY, mouseX + 140, mouseY)
}

// creates an entire house
function house() {
    roof()
    square(mouseX, mouseY, 70);
}

function house2() {
    roof2()
    square(mouseX + 70, mouseY, 70);
}

function house3() {
    roof3()
    square(mouseX + 140, mouseY, 70);
}