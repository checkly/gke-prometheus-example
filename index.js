require('dotenv').config()
const http = require("http");


const host = 'localhost';
const port = 8000;
const checkly_url = process.env.checkly_endpoint
const headers = {"Authorization": `Bearer ${process.env.checkly_bearer}`}

const server = http.createServer();
server.on('request', async(req, res) =>{
    const response = await fetch(checkly_url, { method: 'GET', headers: headers})
    const metrics = await response.text()
    res.writeHead(200);
    res.end(metrics);
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

async function main(){
    
    console.log(checkly_url)
   

}

main()
