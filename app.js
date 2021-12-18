let box = document.querySelector(".box");

const hexArr = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'A' , 'B' , 'C' , 'D' , 'E' , 'F'];
let color = [];

function changeBackColor(){
    for (let i=0; i<6; i++){
        color[i] = hexArr[Math.floor(Math.random() * hexArr.length)];
    }
    box.style.backgroundColor = `#${color.join("")}`
}

box.addEventListener("click" , changeBackColor);

document.onkeyup = function(e) {
    if(e.code === "Space"){
        changeBackColor();
    }
}