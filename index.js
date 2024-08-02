import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify({
        data: "hello swapnil",
    }))
});

server.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}/`);
});