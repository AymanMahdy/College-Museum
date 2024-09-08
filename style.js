// Start navbar
$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});
    $('.feat-btn').click(function(){
        $('nav ul .feat-show').toggleClass("show");
        $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
        $('nav ul .serv-show').toggleClass("show1");
        $('nav ul .second').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    const btnOpen = document.getElementById('menu-toggle-open')
    const btnClose = document.getElementById('menu-toggle-close')

    btnOpen.addEventListener("click", () => {
        btnClose.style.display = "block"
    })
    btnClose.addEventListener("click", () => {
        btnClose.style.display = "none"
    })
// End navbar

// Start Card-One
const container = document.getElementById('container-two')

const registerBtn = document.getElementById('re')

const loinBtn = document.getElementById('lo')

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})
loinBtn.addEventListener('click', () => {
    container.classList.remove("active")
});
// End Card-One

// Start hippo
const hippos = document.querySelectorAll('.hippo');
const gradients = document.querySelectorAll('.gradient');
const hippoBg = document.querySelector('.hippoBackground');


let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let hippoHeight = hippos[0].offsetHeight;
        hippoBg.style.height = `${hippoHeight * 0.9}px`;
    }
    else{
        hippoBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);
// End hippo
// Start Car-Bastet
let productImg = document.getElementById("productImg");
let btnCat = document.getElementsByClassName("btnCat");

btnCat[0].onclick = function(){
    productImg.src = "img/1.png";
    for(bt of btnCat) {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btnCat[1].onclick = function(){
    productImg.src = "img/2.png";
    for(bt of btnCat) {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btnCat[2].onclick = function(){
    productImg.src = "img/3.png";
    for(bt of btnCat) {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btnCat[3].onclick = function(){
    productImg.src = "img/4.png";
    for(bt of btnCat) {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btnCat[4].onclick = function(){
    productImg.src = "img/5.png";
    for(bt of btnCat) {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
// End Car-Bastet
