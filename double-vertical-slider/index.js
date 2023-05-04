const SliderContainer = document.querySelector('.slider-container')
const SlideRight = document.querySelector('.right-slide')
const SlideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const SlidesLength = SlideRight.querySelectorAll('div').length

let activeSlideIndex = 0

SlideLeft.style.top = `-${(SlidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) =>{
    const sliderHeight = SliderContainer.clientHeight

    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > SlidesLength - 1){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = SlidesLength - 1
        }
    }
    SlideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    SlideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}