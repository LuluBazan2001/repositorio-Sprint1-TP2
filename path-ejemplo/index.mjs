// Importa el módulo path, que sirve para trabajar con rutas de archivos y carpetas
import path from 'path';

// Definimos una ruta de archivo de ejemplo
const filePath = './data/example.txt';

// Obtenemos el directorio base
// Obtiene solo el directorio donde está ubicado el archivo
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

// Obtenemos el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

// Obtenemos la extensión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

// Creamos una ruta unida
// Une varias partes en una sola ruta correcta para el sistema operativo
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);
