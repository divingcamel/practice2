// navbar
window.onscroll = ()=> {navstick()};
let nav = document.getElementById("navbar");
let sticky = nav.offsetTop;
function navstick() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// modal
let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("modal-btn");
let closeBtn = document.getElementsByClassName("close")[0];
modalBtn.onclick = ()=> {
    modal.style.display = "block";
}
closeBtn.onclick = ()=> {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event)=> {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// accordion
let acc = document.getElementsByClassName("accordion");
for (let i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active-acc");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// tab
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}
document.getElementsByClassName("tablinks")[0].click(); // default open the first tab

// slide show
let slideIndex = 1;
showSlides(slideIndex);
setInterval(()=>{plusSlides(1);}, 5000); // auto slide show

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dot = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active-slide", "");
    }
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += " active-slide";
}