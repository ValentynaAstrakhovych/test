const imgA= document.querySelector('.first')

const allBgIm=['images/main.png', 'images/main2.jpeg', 'images/main3.webp'];

function changeBg(){
    imgA.style.backgroundImage="url('images/main2.jpeg')";
}

 setInterval(changeBg, 1500)

function changeBg2(){
    imgA.style.backgroundImage="url('images/main3.webp')";
}

setInterval(changeBg2,2500)

function changeBg3(){
    imgA.style.backgroundImage="url('images/main4.webp')";
}

setInterval(changeBg3, 3500)

function changeBg4(){
    imgA.style.backgroundImage="url('images/main.png')";
}

setInterval(changeBg4,4500)

/*burger menu*/

const menuBurger=document.querySelector(".burger");
const navList = document.querySelector(".krea__nav");

menuBurger.addEventListener("click",function(){navList.style.display='block'});

document.querySelector(".menu__link").addEventListener("click", function(){navList.style.display='none'})

/*arrow menu down to up*/

const arrow=document.querySelectorAll(".arrowtr");
const info=document.querySelectorAll(".hide");

arrow.forEach(a=>a.addEventListener('click',function(){
    a.classList.remove('arrow-down');
    a.classList.add('arrow-up');
    
    info.forEach(function(e){
        e.style.display="block"});
}));

arrow.forEach(a=>a.addEventListener('mouseout',function(){
    a.classList.remove('arrow-up');
    a.classList.add('arrow-down');
}));
