require('dotenv').config()
const http = require("http");


const host = '0.0.0.0';
const port = 8080;
const checkly_url = process.env.checkly_endpoint
const headers = {"Authorization": `Bearer ${process.env.checkly_bearer}`}

console.log(`requesting prometheus metrics from: ${checkly_url}`)

const server = http.createServer();
server.on('request', async(req, res) =>{
    console.log('pulling metrics from Checkly..')
    try{
    const response = await fetch(checkly_url, { method: 'GET', headers: headers})
    const metrics = await response.text()
    if (response.status !== 200) {
        console.log('request to checkly failed')
        res.writeHead(500);
        res.end(`request to checkly failed: ${checkly_url} response: ${response.status}`);
        return
    }
    res.writeHead(200);
    res.end(metrics);
    } catch (e) {
        console.error("failed downloading metrics from Checkly")
        console.error(e)
        res.writeHead(500);
        res.end(`error ${e.toString()} grabbing metrics from: ${checkly_url}`);    
    }  
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

