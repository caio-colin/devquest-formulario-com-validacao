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
campos.forEach(function (inputs) {
  inputs.addEventListener("input", function () {
    if (inputs.value.trim() !== "") {
      limparMarcas(inputs)
    } else {
      marcarCampoEmBranco(inputs)
    }
  })
})
campos.forEach(function (inputs) {
  inputs.addEventListener("blur", function () {
    if (inputs.value.trim() !== "") {
      limparMarcas(inputs)
    } else {
      marcarCampoEmBranco(inputs)
    }
  })
})

formulario.addEventListener("submit", function (event) {
  event.preventDefault()
  let camposPrenchidos = campos.length - campos.length
  let totalDeCamposDoFormulario = campos.length

  for (let i = campos.length - 1; i >= 0; i--) {
    if (campos[i].value.trim() !== "") {
      limparMarcas(campos[i])
      camposPrenchidos++
    } else {
      marcarCampoEmBranco(campos[i])
      campos[i].focus()
    }
  }

  if (camposPrenchidos === totalDeCamposDoFormulario) {
    formulario.submit()
  } else {
    return
  }
  alert("Formulário enviado com Sucesso, seu formulário será resetado") // Poderia ser um modal, mas ainda não sei fazer ;) kkk
  formulario.reset()
})
