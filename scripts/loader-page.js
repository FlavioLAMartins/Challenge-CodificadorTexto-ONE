let loader = document.querySelector('.page-loading')
let pageDecode = document.querySelector('main')
let load = setInterval(animate, 50)
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