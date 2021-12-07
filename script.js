document.addEventListener('DOMContentLoaded', function() {

    
    let canvas = document.querySelector('#canvas');
    for (let i = 0; i < 256; i++){
        let div = document.createElement("DIV");
        div.id = `div${i}`;
        div.className ='block';
        div.innerHTML = "";
        div.addEventListener("mouseover", ()=>changeColor(`div${i}`));
        canvas.append(div);
    }

  });
var color = "black"
function changeColor(divId){
    let div = document.querySelector('#divId');
    
    console.log(divId);
    div.style.backgroundColor = color;

}