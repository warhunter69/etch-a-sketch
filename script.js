document.addEventListener('DOMContentLoaded', function() {

    
    let canvas = document.querySelector('#canvas');
    for (let i = 0; i < 256; i++){
        let div = document.createElement("DIV");
        div.id = `div${i}`;
        div.className ='block';
        div.innerHTML = ""
        canvas.append(div);
    }

  });