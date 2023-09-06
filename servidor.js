import { createServer } from 'http';
import chalk from 'chalk';

const HOST = '127.0.0.1';
const PORT = 8000; 

const server = createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const respuestaJSON = JSON.stringify({
    nombre: 'Monik',
    mensaje: '¡Hola desde mi servidor en Node.js!'
  });

  
  res.end(respuestaJSON);
});

server.listen(PORT, HOST, () => {
  
  console.log(chalk.green(`El servidor está funcionando en http://${HOST}:${PORT}/`));
});
