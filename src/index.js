const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const line = {
    x : 0,
    y : 0,
    color : "rgb(0, 0, 0)",
    moving: false
}

screen.addEventListener("mousemove", (event) =>{
    drawing(event.x, event.y);
});



function drawing(coodinateX, coodinateY){
    contextScreen.beginPath();
    contextScreen.moveTo(coodinateX- 2, coodinateY- 192);
    contextScreen.lineTo(coodinateX, coodinateY - 190);
    contextScreen.stroke();
}