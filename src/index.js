const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const drawController = {
    x : 0,
    y : 0,
    size : 3,
    color : "rgb(0, 0, 0)",
    drawing: false
}

// função para comecar o desenho
function startDraw(e) {
    drawController.drawing = true;
    // garante que a linha não se junte com a antetior
    contextScreen.beginPath();
};
// finaliza o desenho da linha assim que solta o botão do mouse 
function finishDraw(e) {
    drawController.drawing = false;
};

// função resposavel pelo desenho
function draw(e){
    if(drawController.drawing){
        contextScreen.strokeStyle = drawController.color;
        contextScreen.lineWidth = drawController.size;
        contextScreen.lineCap = "round";
        contextScreen.lineTo(e.offsetX, e.offsetY);
        contextScreen.stroke();
    }
}

// para o desenho, quando o mouse saia a da area de desenho.
 function lostFocus(){ 
     drawController.drawing = false 
 }

// lista de eventos 
screen.addEventListener("mousedown", startDraw, false);
screen.addEventListener("mouseup", finishDraw, false);
screen.addEventListener("mousemove", draw, false);
screen.addEventListener("mouseover", lostFocus, false);

