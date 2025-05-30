import { EventEmitter } from 'events';

// Creamos una instancia de EventEmitter
// Crea una instancia que va a poder emitir y escuchar eventos
const emisor = new EventEmitter();

// Definimos un evento personalizado
// Define qué hacer cuando ocurra el evento 'saludo'
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

// Emitimos el evento 'saludo'
// Lanza (emite) el evento 'saludo' con el parámetro 'Mundo'
emisor.emit('saludo', 'Mundo');
