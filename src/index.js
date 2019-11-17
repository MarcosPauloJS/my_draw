const screen = document.querySelector("#screen");
const contextScreen = screen.getContext("2d");

const line = {
    x : 0,
    y : 0,
    color : "rgb(0, 0, 0)"
}

screen.addEventListener("mousemove", (event) =>{
    // console.log(event.x);
    drawing(event.x, event.y);
});

function drawing(coodinateX, coodinateY){
    contextScreen.beginPath();
    contextScreen.moveTo(0,0);
    contextScreen.lineTo(coodinateX, coodinateY);
    contextScreen.stroke();

}