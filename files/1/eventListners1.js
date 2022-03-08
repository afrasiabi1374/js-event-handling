// چون تگ اسکریپتو آوردیم بالا این حرکتو میکنیم که دیتا ها قشنگ لود بشه
document.addEventListener('DOMContentLoaded', init)

function init() {
    let btn = document.getElementById('btn')
    let link = document.getElementById('link')
    let txt = document.getElementById('text')

    btn.addEventListener('click', btnClicked)

    function btnClicked(ev) {
        console.log(ev.type, ev.target, ev.currentTarget);
    }

    link.addEventListener('click', linkClicked)

    function linkClicked(ev) {
        ev.preventDefault()
        console.log(ev.type, ev.target, ev.currentTarget);
    }

    txt.addEventListener('input', (ev) => {
        console.log(ev.type, ev.target.value, ev.currentTarget);
    })

    txt.addEventListener('change', (ev) => {
        console.log(ev.type, ev.target.value, ev.currentTarget);
    })

    txt.addEventListener('blur', (ev) => {
        console.log(ev.type, ev.target.value, ev.currentTarget);
    })
}