const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions(){
    for (let i = 0; i<secBtn.length; i++){
        secBtn[i].addEventListener('click',function() {
    let currentBtn = document.querySelectorAll('.active-btn');
    currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    this.className += ' active-btn';
    })

}

allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id) {
        secBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('actvie')
        sections.forEach((section) => {
            section.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

}
PageTransitions();

