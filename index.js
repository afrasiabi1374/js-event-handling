let h1 = document.querySelector('h1')

h1.addEventListener('click',(ev)=>{

    console.log('client=>', ev.clientX, ev.clientY);
    console.log('page=>',ev.pageX, ev.pageY);
    console.log('offset=>',ev.offsetX, ev.offsetY);
    
    window.scrollBy(0, 600)
})

window.addEventListener('scroll', (ev)=>{
    console.log('client=>', ev.clientX, ev.clientY);
    console.log('page=>',ev.pageX, ev.pageY);
    console.log('offset=>',ev.offsetX, ev.offsetY);
    console.log('window=>',ev.screenX, ev.screenY);
    setTimeout(() => {
        window.scrollTo(0,0)
    }, 2000);
})