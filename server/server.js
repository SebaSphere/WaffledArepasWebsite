const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const YAML = require('yaml')
const fs = require('fs')
const app = express();


const generalConfig = fs.readFileSync('../config.yml', 'utf8')
const prerenderConfig = fs.readFileSync('../credentials/prerender-token.json', 'utf8')

const port = YAML.parse(generalConfig)["serverPort"];

console.log("The REST server IP is http://127.0.0.1:" + port)

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// used for SEO
app.use(require('prerender-node').set('prerenderToken', JSON.parse(prerenderConfig)["token"]));

app.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port ${port}`)
});

// listen on the port
app.listen(port);