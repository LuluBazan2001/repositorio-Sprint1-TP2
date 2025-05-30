// Importa el módulo fs (file system) para trabajar con archivos
import fs from 'fs';

// Leemos un archivo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    //Si hay error al leer, se lanza una excepción
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

// Escribimos en un nuevo archivo
// Crea o sobrescribe un archivo con el contenido indicado
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});

// Cambiamos el nombre (o mueve) un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
});

