const $formulario = document.querySelector('form')
const $reiniciar = document.getElementById('reiniciar-formulario')
const $enviar = document.getElementById('enviar-formulario')
const $nombre = document.getElementById('nombre')
const $mail = document.getElementById('mail')
const $sexo = document.getElementById('sexo')
const $edad = document.getElementById('edad')
const $datos = document.getElementById('datos')

$formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()

  $datos.innerText = `
  Datos Ingresados
  Nombre: ${nombre.value}
  Gmail: ${mail.value}
  Sexo: ${sexo.value}
  Edad: ${edad.value}
  `

  $reiniciar.click()
})
