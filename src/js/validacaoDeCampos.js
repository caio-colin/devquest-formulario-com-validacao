const formulario = document.getElementById("meuFormulario")
const campos = document.querySelectorAll(".estilo-do-campo")

function marcarCampoEmBranco(inputElemento) {
  inputElemento.classList.remove("com-valor")
  inputElemento.classList.add("input-em-branco")
  const obsDeCampoEmBranco = inputElemento.nextElementSibling
  obsDeCampoEmBranco.textContent = "campo obrigatório"
}
function limparMarcas(inputElemento) {
  inputElemento.classList.add("com-valor")
  inputElemento.classList.remove("input-em-branco")
  const obsDeCampoEmBranco = inputElemento.nextElementSibling
  obsDeCampoEmBranco.textContent = ""
}
function gerirCampos(inputElemento) {
  if (inputElemento.value.trim() == "") {
    marcarCampoEmBranco(inputElemento)
  } else {
    limparMarcas(inputElemento)
  }
}

campos.forEach(function (inputs) {
  inputs.addEventListener("input", function () {
    gerirCampos(inputs)
  })
  inputs.addEventListener("blur", function () {
    gerirCampos(inputs)
  })
})

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault()
  let camposPrenchidos = campos.length - campos.length
  let totalDeCamposDoFormulario = campos.length

  const camposEmArray = Array.from(campos)
  camposEmArray.reverse()

  camposEmArray.forEach(function (inputElemento) {
    if (inputElemento.value.trim() == "") {
      marcarCampoEmBranco(inputElemento)
      inputElemento.focus()
    } else {
      limparMarcas(inputElemento)
      camposPrenchidos++
    }
  })

  if (camposPrenchidos === totalDeCamposDoFormulario) {
    formulario.submit()
  } else {
    return
  }
  alert("Formulário enviado com Sucesso, seu formulário será resetado") // Poderia ser um modal, mas ainda não sei fazer ;) kkk
  formulario.reset()
})
