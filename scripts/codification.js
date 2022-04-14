function code() {
  const txt = document.getElementById('input-text')
  const textforcopy = document.getElementById('text-copy')
  const text = txt.value
  const res = text
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
  textforcopy.innerHTML = res
  typeWriter(escreva)
  txt.value = ''
}