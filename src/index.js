const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const line = {
    x : 0,
    y : 0,
    color : "rgb(0, 0, 0)",
    moving: false
}

screen.addEventListener("mousemove", (event) =>{
    drawing(event.offsetX, event.offsetY);
});



function drawing(coodinateX, coodinateY){
    contextScreen.beginPath();
    // contextScreen.moveTo(coodinateX, coodinateY);
    contextScreen.moveTo(0,0);
    contextScreen.lineTo(coodinateX, coodinateY);
    contextScreen.stroke();
 };