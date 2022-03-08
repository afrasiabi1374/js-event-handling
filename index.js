let m = document.getElementById('m')
let d = document.getElementById('d')
let p = document.getElementById('p')
let s = document.getElementById('s')

let highlight = (ev) => {
    let target = ev.currentTarget
    target.classList.toggle('gold')
    ev.stopImmediatePropagation()
}

// let reset = (_element) => {
//     setTimeout(() => {
//         _element.className = '';

//     }, 2000)
// }

let arr = [m, d, p, s]
arr.forEach(element => {
    element.addEventListener('click', highlight)
});