const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowButtons = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card-item").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth/ firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});

carouselChildrens.slice(0, cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
});

arrowButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        carousel.scrollLeft += button.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e)=>{
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

var sections = document.querySelectorAll(".observer");

var options = {
    threshold: 0
}

sections.forEach(section => {
    var observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add("toggle");
            } else {
                entry.target.classList.remove("toggle");
            }
        })
    },options)
    observer.observe(section)
})


//this part is the open and close menu for pads and mobiles only!
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mainMenu = document.querySelector(".header-buttons");
const buttons = document.querySelector(".buttons");
const hamIcons = document.querySelector(".ham-icons");
const button = document.querySelectorAll(".stager");


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.left = '30%';
  buttons.style.opacity = '1';
  hamIcons.style.opacity = '1';
  hamIcons.style.display = 'flex';
  button.forEach(one =>{
    one.classList.add("stager-anime");
  })
}

function close(){
  mainMenu.style.left = '120%';
  buttons.style.opacity = '0';
  hamIcons.style.opacity = '0'
  hamIcons.style.display = 'none'
  button.forEach(one =>{
    one.classList.remove("stager-anime");
  })
}
