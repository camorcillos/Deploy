document.addEventListener('DOMContentLoaded', () => {
    const ejecutarBtn = document.getElementById('ejecutar-btn');
  
    ejecutarBtn.addEventListener('click', () => {
      fetch('/ejecutar-contenedor')
        .then(response => {
          if (response.ok) {
            alert('Contenedor Docker ejecutado correctamente.');
          } else {
            alert('Error al ejecutar el contenedor Docker.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
  