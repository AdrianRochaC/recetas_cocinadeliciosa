// Función para mostrar y ocultar la información desplegable
function toggleDescripcion(receta) {
    const descripcion = receta.querySelector('.descripcion');
    descripcion.style.display = descripcion.style.display === 'block' ? 'none' : 'block';
}

// Agregar evento click a los botones de información desplegable
document.querySelectorAll('.receta button').forEach(button => {
    button.addEventListener('click', event => {
        const receta = event.target.parentNode.parentNode;
        toggleDescripcion(receta);
    });
});
// Seleccionamos todos los botones "Ver más"
const verMasButtons = document.querySelectorAll('.ver-mas');

// Agregamos un listener de clic a cada botón
verMasButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Seleccionamos la información adicional correspondiente
    const informacionAdicional = button.parentNode.querySelector('.informacion-adicional');

    // Mostramos la información adicional
    if (informacionAdicional.style.display === 'none') {
      informacionAdicional.style.display = 'block';
      button.textContent = 'Ver menos';
    } else {
      informacionAdicional.style.display = 'none';
      button.textContent = 'Ver más';
    }
  });
});