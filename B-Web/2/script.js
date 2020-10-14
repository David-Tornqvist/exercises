const para = document.getElementById("para");

function random(min,max) {
    return(Math.round(Math.random()* max - min) + min);
}

function changeColor(){
    const colors = ["red","green","cyan","blue","hotpink"];
    return(colors[random(0,colors.length - 1)])
}

para.addEventListener("click",() => {para.style = `color: ${changeColor()}`});