// Importa el módulo os, que da información sobre el sistema operativo
import os from 'os';

// Obtenemos la arquitectura del sistema
// Devuelve la arquitectura del sistema (como x64, arm, etc.)
console.log('Arquitectura:', os.arch());

// Obtenemos el tipo de sistema operativo
// Devuelve el sistema operativo (linux, win32, darwin, etc.)
console.log('Plataforma:', os.platform());

// Obtenemos la cantidad total de memoria
// Muestra cuánta memoria RAM total tiene la máquina
console.log('Memoria total:', os.totalmem());

// Obtenemos la memoria libre
console.log('Memoria libre:', os.freemem());

// Obtenemos la información de la CPU
// Muestra un arreglo con información detallada sobre los núcleos del procesador
console.log('Información de la CPU:', os.cpus());
