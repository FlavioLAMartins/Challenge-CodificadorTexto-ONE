function decode() {
  const txt = document.getElementById('input-text')
  const textforcopy = document.getElementById('text-copy')
  const text = txt.value
  const haveWord = ['enter', 'ai', 'ober', 'ufat', 'imes']
  const verif = haveWord.some(e => text.includes(e))
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