const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const line = {
    x : 0,
    y : 0,
    size : 3,
    color : "rgb(0, 0, 0)",
    moving: false
}


screen.addEventListener("mousemove", event =>{
    line.x = event.offsetX; 
    line.y = event.offsetY; 
    drawing();
    }, false);



function drawing(){
    

    contextScreen.beginPath();
    // contextScreen.moveTo(0,0);
    contextScreen.moveTo(line.x, line.y);
    contextScreen.lineTo(line.x + 3, line.y);
    contextScreen.stroke();
    console.log("função");
    requestAnimationFrame(drawing)
 };