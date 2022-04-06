const slider = document.querySelector('.slider-container')
// console.log(document.querySelectorAll('.slide'));
let slides = Array.from(document.querySelectorAll('.slide'))
// console.log(slides);
let isDragging = false
let startPos = 0
let currentTranslate = 0
let prevTranslate = 0
let animationID = 0
let currentIndex = 0

    slides.forEach((slide, index) => {
        const slideImage = slide.querySelector('img')
        slideImage.addEventListener('dragstart', (e) => {
            return e.preventDefault()
            // به خاطر اینکه موقع درگ کردن عکس کشیده نشه 
        })

        // Touch events
        slide.addEventListener('touchstart', touchStart(index))
        slide.addEventListener('touchend', touchEnd)
        slide.addEventListener('touchmove', touchMove)

        // Mouse events
        slide.addEventListener('mousedown', touchStart(index))
        slide.addEventListener('mouseup', touchEnd)
        slide.addEventListener('mousemove', touchMove)
        slide.addEventListener('mouseleave', touchEnd)

    })
    // disable context menu
    window.addEventListener('resize', setPositionByIndex)

    window.oncontextmenu = function(event) {
        // با انجام کلیک راست اتفاقی نمیافته
        event.preventDefault()
        event.stopPropagation()
        return false
    }
    
    function getPositionX(event) {
        // اگه ایونت موس بود مختصات موس رو بده وگرنه مختصات تاچ رو بده
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }

    function touchStart(index) {
        return function(event) {
            currentIndex = index
            startPos = getPositionX(event)
            // console.log(' tag name that dragged', event.target.tagName);
            isDragging = true;

            animationID = requestAnimationFrame(animation)
            slider.classList.add('grabbing')
        }
    }

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        //  console.log('current position by touchmove', currentPosition);
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function touchEnd() {
    cancelAnimationFrame(animationID)
    isDragging = false
    const movedBy = currentTranslate - prevTranslate
    // میزان درگ شده بعد ول  کردن کلیک اگه بیشتر از صد بود یکی اضافه شه اگه از منفی صد کمتر بود یکی کم بشه
    if (movedBy < -50 && currentIndex < slides.length -1) currentIndex +=1
        
    if (movedBy > 50 && currentIndex > 0) currentIndex -=1
    setPositionByIndex ()
    slider.classList.remove('grabbing')
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}

function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex (){
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPosition()
}