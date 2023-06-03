const img= document.querySelector('.first')

const allBgIm=['images/main.png', 'images/main2.jpeg', 'images/main3.webp'];

function changeBg(){
    img.style.backgroundImage="url('images/main2.jpeg')";
}

 setInterval(changeBg, 2000)

function changeBg2(){
    img.style.backgroundImage="url('images/main3.webp')";
}

setInterval(changeBg2,4000)

function changeBg3(){
    img.style.backgroundImage="url('images/main4.webp')";
}

setInterval(changeBg3, 6000)

function changeBg4(){
    img.style.backgroundImage="url('images/main.png')";
}

setInterval(changeBg4,8000)