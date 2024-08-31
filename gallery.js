// Obtener la tabla de la galería
const galeria = document.getElementById('galeria');

// Agregar evento de click a cada imagen
galeria.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    // Obtener la imagen seleccionada
    const imagen = e.target;
    // Obtener la ruta de la imagen
    const rutaImagen = imagen.src;
    // Abrir la imagen en una ventana emergente
    window.open(rutaImagen, '_blank', 'width=800,height=600');
  }
});