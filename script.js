//For creating typing effect, applied to title and output results in encoding and decoding
function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 50 * i)
  })
}

const title = document.getElementById('title')
typeWriter(title)

const escreva = document.getElementById('text-copy')

//For creating the encoding
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
  typeWriter(escreva)
}

//For creating the decoding
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
    typeWriter(escreva)
  }
}

function copy() {
  navigator.clipboard.writeText(document.getElementById('text-copy').value)
  alert('Texto copiado')
}
