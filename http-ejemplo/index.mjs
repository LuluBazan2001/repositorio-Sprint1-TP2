import http from 'http';

// Creamos un servidor HTTP básico
//Crea un servidor que responde con "¡Hola, Mundo!" en texto plano
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //El tipo de contenido es texto plano
    res.setHeader('Content-Type', 'text/plain');
    //Finaliza la respuesta con el texto
    res.end('¡Hola, Mundo!');
});

// Configuramos el servidor para que escuche en el puerto 3000
// El servidor empieza a escuchar en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});
