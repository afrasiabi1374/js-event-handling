let m = document.getElementById('m')
let d = document.getElementById('d')
let p = document.getElementById('p')
let s = document.getElementById('s')

let highlight = (ev) => {
    let target = ev.currentTarget
    target.classList.toggle('gold')

    // ینی فقط روی همون کلاس رویداد اعمال بشه دیگه روی پدرانش اعمال نمیشه
    ev.stopImmediatePropagation()
}

let arr = [m, d, p, s]
arr.forEach(element => {
    element.addEventListener('click', highlight)
});