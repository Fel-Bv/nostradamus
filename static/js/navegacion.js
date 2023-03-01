const archivos = [
  'HTML.html', 'etiquetas.html', 'listas.html', 'formularios.html'
]
const archivo_actual = window.location.href.split('/').slice(-1)[0]
indice_archivo_actual = archivos.indexOf(archivo_actual)

const archivo_previo = archivos[indice_archivo_actual - 1]
const archivo_siguiente = archivos[indice_archivo_actual + 1]

const $previo = document.getElementById('articulo-previo')
const $siguiente = document.getElementById('articulo-siguiente')

$siguiente.href = 'templates/' + archivo_siguiente
$previo.href = 'templates/' + archivo_previo

if (archivo_previo === undefined) {
  $previo.classList.add('deshabilitado')
}
if (archivo_siguiente === undefined) {
  $siguiente.classList.add('deshabilitado')
}
