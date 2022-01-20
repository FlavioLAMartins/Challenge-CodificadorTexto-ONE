function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 120 * i)
  })
  setTimeout(() => typeWriter(title), 10000)
}
const title = document.getElementById('title')
typeWriter(title)

function code() {
  let txt = document.getElementById('input-text')
  let textforcopy = document.getElementById('text-copy')
  let text = txt.value
  let res = text
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
  textforcopy.innerHTML = res
}

function decode() {
  let txt = document.getElementById('input-text')
  let textforcopy = document.getElementById('text-copy')
  let text = txt.value
  let haveWord = ['enter', 'ai', 'ober', 'ufat']
  let verif = haveWord.some(e => text.includes(e))
  if (!verif) {
    alert('Texto inválido, tente novamente')
  } else {
    let res = text
      .replace(/enter/gi, 'e')
      .replace(/imes/gi, 'i')
      .replace(/ai/gi, 'a')
      .replace(/ober/gi, 'o')
      .replace(/ufat/gi, 'u')
    textforcopy.innerHTML = res
  }
}

function copy() {
  let copyText = document.getElementById('text-copy')
  copyText.select()
  document.execCommand('copy')
  alert('Texto copiado')
}
