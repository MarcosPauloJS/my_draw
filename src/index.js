const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const menuController = document.querySelector("#menuController")

const drawController = {
    tool: "pencil",
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
function clearDraw(){
    contextScreen.clearRect(0, 0, 960, 600);
   
}

function toolPencil(){
    drawController.color = "rgb(0, 0, 0)";
}

function toolRubber(){
    drawController.color = "rgb(255, 255, 255)";
}

function menuOptions(e){
    const target = e.target;
    if(target.id === "pencil") toolPencil();
    if(target.id === "rubber")  toolRubber();
    if(target.id === "clear") clearDraw();
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

// pegando inpulte do menu
menuController.addEventListener("click", menuOptions)

