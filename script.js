const circle = document.getElementById('circle');
const treasure = document.getElementById('treasure');
const popup = document.getElementById('popup');
const gems = document.getElementById('gems');
const diamond = document.querySelectorAll('.diamond');

treasure.addEventListener('click', expandAll)
gems.addEventListener('click', collapse)

function expandAll(){
    circle.classList.toggle("bigger");
    popup.classList.toggle("vis");
    gems.classList.toggle("vis");
    diamond.forEach(item => item.style.opacity = "0");
}

function collapse(){
    circle.classList.remove("bigger");
    popup.classList.remove("vis");
    gems.classList.remove("vis");
    diamond.forEach(item => item.style.opacity="1");
}