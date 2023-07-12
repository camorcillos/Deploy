const express = require('express');
const Docker = require('dockerode');
const path = require('path');
const app = express();
const docker = new Docker();

app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

app.get('/ejecutar-contenedor', (req, res) => {
  const nombreContenedor = 'node';
  const imagen = 'node';

  docker.createContainer({
    Image: imagen,
    name: nombreContenedor,
  }, (error, container) => {
    if (error) {
      console.error('Error al crear el contenedor Docker:', error);
      res.sendStatus(500);
    } else {
      container.start((error) => {
        if (error) {
          console.error('Error al ejecutar el contenedor Docker:', error);
          res.sendStatus(500);
        } else {
          console.log('Contenedor Docker ejecutado correctamente');
          res.sendStatus(200);
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor Node.js ejecutándose en el puerto 3000');
});
