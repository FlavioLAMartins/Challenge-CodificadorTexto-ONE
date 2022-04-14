const loader = document.querySelector('.page-loading')
const pageDecode = document.querySelector('main')
const load = setInterval(animate, 50)
let c = 0
function animate() {
  if (c == 50) {
    loader.parentElement.removeChild(loader)
    document.querySelector('main').style.visibility = 'visible'
    typeWriter(title)
    clearInterval(load)
  } else {
    c++
  }
}