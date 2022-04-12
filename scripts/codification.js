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
  txt.value = ''
}