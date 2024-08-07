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