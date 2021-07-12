let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

let skillsContent = document.getElementById('skills-content');



function myFunction() {
    let value = window.scrollY;

    text.style.top =  value * -1.5 + "px";
    bird1.style.top = -400 + value * -0.5 + "px";
    bird1.style.left = value * 0.5 + "px";
    bird2.style.top = -400 + value * -0.7 + "px";
    bird2.style.left = -50 + value * -0.5 + "px";
    rocks.style.top = -400 + value * -0.125 + "px";
    forest.style.top = -400+ value * 0.005 + "px";
    header.style.top = value * -0.5 + "px";
    header.style.opacity = 1 - value/75;
    text.style.opacity = value/125;
}

function skillSet() {
    let value = window.scrollY;
    skillsContent.style.left = 1750 + value * -0.75 + "px";
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let rounded = Math.round(scroll);
    if(rounded >= 200){
        window.addEventListener('scroll', skillSet);
    }
    else{
        window.removeEventListener('scroll', skillSet);
    }
    console.log(rounded)
});


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let rounded = Math.round(scroll);
    if(rounded <= 700){
        window.addEventListener('scroll', myFunction);
    }
    else{
        window.removeEventListener('scroll', myFunction);
    }
    console.log(rounded)
});

