function selectSlide(slider, newSlideIndex) {
    slider.slides[slider.currentSlideIndex].classList.add("hidden");
    slider.slides[newSlideIndex].classList.remove("hidden");
    slider.links[slider.currentSlideIndex].classList.remove("selected");
    slider.links[newSlideIndex].classList.add("selected");
    slider.dots[slider.currentSlideIndex].classList.remove("active");
    slider.dots[newSlideIndex].classList.add('active');
    slider.currentSlideIndex = newSlideIndex;
}
function shiftSlideLeft(slideObject) {
    let newSlideIndex = slideObject.currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slideObject.sliderSize - 1;
    }
    selectSlide(slideObject, newSlideIndex);
}
function shiftSlideRight(slideObject) {
    let newSlideIndex = slideObject.currentSlideIndex + 1;
    if (newSlideIndex > (slideObject.sliderSize - 1)) {
        newSlideIndex = 0;
    }
    selectSlide(slideObject, newSlideIndex);
}
function init() {
    let links = Array.from(document.getElementsByClassName("projects__menu--link"));
    let slides = Array.from(document.getElementsByClassName("projects"));
    let arrowLeft = Array.from(document.getElementsByClassName("arrow-left"));
    let arrowRight = Array.from(document.getElementsByClassName("arrow-right"));
    let dots = Array.from(document.getElementsByClassName("dot"));
    let currentSlideIndex = 0;
    let slideObject = {
        links,
        slides,
        arrowLeft,
        arrowRight,
        dots,
        currentSlideIndex,
        sliderSize:3
    };
    links.forEach((element, i) => {
        // element.onclick = select.bind(null, slideObject, i);
        element.onclick = () => {selectSlide(slideObject, i)};
    });
    dots.forEach((element, i) => {
        element.onclick = () => {selectSlide(slideObject, i)};
    });
    arrowLeft.forEach((element) =>{
        element.onclick = () =>{shiftSlideLeft(slideObject)};
    });
    arrowRight.forEach((element) =>{
        element.onclick = () =>{shiftSlideRight(slideObject)};
    });
    document.onkeydown = (e) =>{
        if (e.keyCode == '37') {
            shiftSlideLeft(slideObject);
            // left arrow
         }
         else if (e.keyCode == '39') {
            shiftSlideRight(slideObject);
            // right arrow
         }
    };
}
window.onload = init;
