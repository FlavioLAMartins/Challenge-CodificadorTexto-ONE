const title = document.getElementById('title')
const escreva = document.getElementById('text-copy')

function copy() {
  navigator.clipboard.writeText(document.getElementById('text-copy').value)
  alert('Texto copiado')
}
