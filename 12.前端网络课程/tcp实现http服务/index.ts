import net from 'net'


const html:string = `<h1>Fly</h1>`;
const headers = [
    'HTTP/1.1 200 OK',
    'Content-Type: text/html',
    `Content-Length: ${html.length}`,
    'Date: ' + new Date().toUTCString(),
    '\r\n',
    html
];

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        if(/GET/.test(data.toString())){
            socket.write(headers.join('\r\n'));
            socket.end();
        }
        
    })
})


server.listen(8080, () => {
    console.log('server is running on 8080',server.address());
})