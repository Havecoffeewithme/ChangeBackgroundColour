
const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 225)
    const green = Math.round(Math.random() * 225)
    const blue = Math.round(Math.random() * 225)
 
    const color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
}

randomColor();