
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')
let activeslide = 0;

rightbtn.addEventListener('click',()=>{
    activeslide++
    if(activeslide > slides.length-1){
        activeslide = 0
    }
    setBgToBody()
    setActiveSlides()
})
leftbtn.addEventListener('click',()=>{
    activeslide--
    if(activeslide < 0){
        activeslide = slides.length-1
    }
    setBgToBody()
    setActiveSlides()
})
function setBgToBody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}
function setActiveSlides(){
   slides.forEach((slide=>{
    slide.classList.remove('active')}))
    slide[activeslide].classList.add('active')

}


