const drawArea = document.querySelector("#drawArea");
const contextdrawArea = drawArea.getContext("2d");

const menuController = document.querySelector("#toolBar")

const toolControler = {
    inputlSize: document.querySelector("#sizeTool")
}

const drawController = {
    tool: "pencil",
    width: 1920,
    heigth : 720,
    size : 3,
    color : "rgb(0, 0, 0)",
    drawing: false
}

// inicializador de aplicação
window.addEventListener("load", resizeScreen)

function resizeScreen(){
    drawController.width = window.innerWidth;
    drawController.height = window.innerHeight;
    drawArea.width = window.innerWidth;
    drawArea.height = window.innerHeight;
}

// função para comecar o desenho
function startDraw(e) {
    drawController.drawing = true;
    // garante que a linha não se junte com a antetior
    contextdrawArea.beginPath();
};

// finaliza o desenho da linha assim que solta o botão do mouse 
function finishDraw(e) {
    drawController.drawing = false;

};

// função resposavel pelo desenho
function draw(e){
    if(drawController.drawing){
        contextdrawArea.strokeStyle = drawController.color;
        contextdrawArea.lineWidth = drawController.size;
        contextdrawArea.lineCap = "round";
        contextdrawArea.lineJoin = "round";
        contextdrawArea.lineTo(e.offsetX, e.offsetY);
        contextdrawArea.stroke();
    }
}
function clearDraw(){
    contextdrawArea.clearRect(0, 0, drawController.width, drawController.height);
   
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
    if(target.id === "rubber") toolRubber();
    if(target.id === "clear") clearDraw();
}

// para o desenho, quando o mouse saia a da area de desenho.
 function lostFocus(){ 
  drawController.drawing = false;
 }

function sizing(e){
    drawController.size = e.target.value;
}

// lista de eventos 
drawArea.addEventListener("mousedown", startDraw, false);
drawArea.addEventListener("mouseup", finishDraw, false);
drawArea.addEventListener("mousemove", draw, false);
drawArea.addEventListener("mouseover", lostFocus, false);
// função em bug pois perde o desenho quando redimensona a tela 
// window.addEventListener("resize", resizeScreen);

// pegando inpulte do menu
menuController.addEventListener("click", menuOptions)
toolControler.inputlSize.addEventListener("change", sizing)




