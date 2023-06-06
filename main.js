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


/* add touch Event*/

const fourFirst=document.querySelector("#fourth_first");

fourFirst.addEventListener('touchmove',(event)=>{
    fourFirst.style.backgroundImage="url('images/fourth-1-2.png')"
});

fourFirst.addEventListener('touchend', (event)=>{fourFirst.style.backgroundImage="url('images/fourth-1.png')"
});

const fourSecond=document.querySelector("#fourth_second");

fourSecond.addEventListener('touchmove', (event)=>{
    fourSecond.style.backgroundImage="url('images/fourth-2.png')"
});

fourSecond.addEventListener('touchend', (event)=>{
    fourSecond.style.backgroundImage="url('images/fourth-2-2.png')"
});



const womensEyeglasses = document.querySelector("#womens-eyeglasses-photo");
const womensSunglasses = document.querySelector("#womens-sunglasses-photo");
const mensEyeglasses = document.querySelector("#mens-eyeglasses-photo");
const mensSunglasses = document.querySelector("#mens-sunglasses-photo");


womensEyeglasses.addEventListener('touchmove',(event)=>{
    womensEyeglasses.style.backgroundImage="url('images/1-2.png')"
});

womensEyeglasses.addEventListener('touchend', (event)=>{
    womensEyeglasses.style.backgroundImage="url('images/1.jpg')"
});


womensSunglasses.addEventListener('touchmove',(event)=>{
    womensSunglasses.style.backgroundImage="url('images/2-2.png')"
});

womensSunglasses.addEventListener('touchend', (event)=>{
    womensSunglasses.style.backgroundImage="url('images/2.jpg')"
});


mensEyeglasses.addEventListener('touchmove',(event)=>{
    mensEyeglasses.style.backgroundImage="url('images/4-4.png')"
});

mensEyeglasses.addEventListener('touchend', (event)=>{
    mensEyeglasses.style.backgroundImage="url('images/4.jpg')"
});


mensSunglasses.addEventListener('touchmove',(event)=>{
    mensSunglasses.style.backgroundImage="url('images/3-3.png')"
});

mensSunglasses.addEventListener('touchend', (event)=>{
    mensSunglasses.style.backgroundImage="url('images/3.jpg')"
});
