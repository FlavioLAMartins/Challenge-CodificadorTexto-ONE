function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 50 * i)
  })
}