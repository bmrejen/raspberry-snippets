;(function(){

const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const app = express();
const directoryToServe = "public";
const port = 3443;

app.use(cors());
app.use(express.static('public'));

const httpsOptions = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('server.crt','utf8')
 };

https.createServer(httpsOptions, app)
  .listen(port, ()=> {
    console.log(`Serving ${directoryToServe} on  ${port}`);
})

})();
