let menuForPhone = document.querySelector('.menu_for_phone');
let downMenu = document.querySelector('.down-menu');
let menuRow = document.querySelector('.menu_row');
let menuIco = menuForPhone.firstElementChild;
var pageTop;
let topButton = document.querySelector('.top');
var timerForScroll;
var timerForShowLinks;
var linksCollection = document.querySelector('.backgroundForDownMenu');

menuForPhone.addEventListener('click', showMenuForPhone);
document.addEventListener('scroll', pageWidth);
menuForPhone.addEventListener('click', setIntervalForShowLinks);

if(topButton) {
    topButton.addEventListener('click', setTime);
}


function pageWidth() {
    pageTop = window.pageYOffset || document.documentElement.scrollTop;

    if(topButton) {
        if(pageTop>300) {
            topButton.style.transform = 'translateX(0px)';
        } else {
            topButton.style.transform = 'translateX(100px)';
        }
    }
}

function showMenuForPhone() {
    downMenu.classList.toggle('hidden');
    menuForPhone.classList.toggle('relative');
    
    if(menuIco.className ==="fas fa-grip-lines") {
        menuIco.className = 'fas fa-times';
    } else {
        menuIco.className ="fas fa-grip-lines"
    }
    setTimeout(function(){
        if(downMenu.style.zIndex=='-1'){
            downMenu.style.zIndex='0';
        }else{downMenu.style.zIndex='-1';
        }
    },700);
}

function scrollToTop() {
    window.scrollBy(0,-100);

    if(pageTop==0) {
        clearInterval(timerForScroll);
    }
}

function setTime(e) {
    e.preventDefault();

    if(pageTop>0) {
        timerForScroll =  setInterval(scrollToTop,20);
    }
}

function setIntervalForShowLinks() {
    var act = linksCollection.firstElementChild;

    function loadDownMenu(){
            act.classList.toggle('showLink');
            act = act.nextElementSibling;
        
            if(act == null) {
                clearInterval(timerForShowLinks);
                act = linksCollection.firstElementChild
            }
    }
    timerForShowLinks = setInterval(loadDownMenu, 120);


    let left = document.querySelector('.main_text');
    



}