const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const drawController = {
    x : 0,
    y : 0,
    size : 3,
    color : "rgb(0, 0, 0)",
    drawing: false
}

function startDraw(e) {
    drawController.x = event.offsetX;
    drawController.y = event.offsetY;
    drawController.drawing = true;
    contextScreen.beginPath();
};
function finishDraw(e) {
    drawController.drawing = false;
};

function draw(e){
    if(drawController.drawing){
        contextScreen.lineWidth = 6;
        contextScreen.lineCap = "round";
        contextScreen.lineTo(e.offsetX, e.offsetY);
        contextScreen.stroke();
    }

}

screen.addEventListener("mousedown", startDraw, false);
screen.addEventListener("mouseup", finishDraw, false);
screen.addEventListener("mousemove", draw, false);
