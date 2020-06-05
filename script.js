const mainContainer = document.getElementById("mainContainer");
let mouseDepressed = false;
let squaresPerSide = window.prompt("How many squares per side?");
let erase = false;

function makeRows(rows, cols){
    mainContainer.style.setProperty('--grid-rows', rows);
    mainContainer.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        mainContainer.appendChild(cell).className = "gridItem";
    };
    addListeners();
};

function changeSquare(e){

    if(mouseDepressed){
        if(erase){
            this.className = "gridItem";
        }else{
            this.className = "gridItemDown";
        }
    }
}

function mouseDown(){
    mouseDepressed = true;
}

function mouseUp(){
    mouseDepressed = false;
}

function clear(){
    const tableDown = document.getElementsByClassName("gridItemDown");
    const table = document.getElementsByClassName("gridItem");

    while(table[0]){
        table[0].parentNode.removeChild(table[0]);
    }

    while(tableDown[0]){
        tableDown[0].parentNode.removeChild(tableDown[0]);
    }

    squaresPerSide = window.prompt("How many squares per side?");
    makeRows(squaresPerSide, squaresPerSide);
}

function eraser(){
    erase = !erase;
    if(erase){
        document.getElementById("eraseButton").innerText = "Draw";
    }else{
        document.getElementById("eraseButton").innerText = "Erase";
    }
}

makeRows(squaresPerSide, squaresPerSide);

function addListeners(){
    const elements = document.getElementsByClassName("gridItem");

    for (var i = 0; i < elements.length; i++){
        elements[i].addEventListener("mouseup", mouseUp);
        elements[i].addEventListener("mousedown", mouseDown);
        elements[i].addEventListener("mouseover", changeSquare);
        elements[i].addEventListener("mousedown", changeSquare);
    }
}

document.getElementById("clearButton").onclick = clear;
