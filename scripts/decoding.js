function decode() {
  let txt = document.getElementById('input-text')
  let textforcopy = document.getElementById('text-copy')
  let text = txt.value
  let haveWord = ['enter', 'ai', 'ober', 'ufat', 'imes']
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
    txt.value = ''
  }
}