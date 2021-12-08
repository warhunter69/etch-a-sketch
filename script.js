document.addEventListener('DOMContentLoaded', function() {

    let size = 16
    let canvas = document.querySelector('#canvas');
    for (let i = 0; i < size*size; i++){
        let div = document.createElement("DIV");
        div.id = `div${i}`;
        div.className ='block';
        div.innerHTML = "";
        div.addEventListener("mouseover", ()=>changeColor(`div${i}`));
        canvas.append(div);
    }
   
    document.querySelector('#clear').addEventListener('click', () => clearCanvas());
    document.querySelector('#resize').addEventListener('click', () => resize());
  });
var color = "black";
var resetColor = "white"
function changeColor(divId){

    let div = document.querySelector(`#${divId}`);
    //console.log(div);
    div.style.backgroundColor = color;

}
function clearCanvas(){
    let canvas = document.querySelector('#canvas');
    let children =canvas.childNodes;
    
    for (let i=0;i<children.length;i++){
        children[i].style.backgroundColor = resetColor;
    }
}

function resize(){
    let canvas = document.querySelector('#canvas');
    size = parseInt(document.querySelector('#size').value);
    console.log(size)
    canvas.innerHTML ="";
    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`
    for (let i = 0; i < size*size; i++){
        let div = document.createElement("DIV");
        div.id = `div${i}`;
        div.className ='block';
        div.innerHTML = "";
        div.addEventListener("mouseover", ()=>changeColor(`div${i}`));
        canvas.append(div);
    }

}
