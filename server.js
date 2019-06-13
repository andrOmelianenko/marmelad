const express    = require('express')
const bodyParser = require('body-parser')
const api        = require('./routes/api')
const app        = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 3001;

app.enable('strict routing')
app.enable('case sensitive routing')

app.use(bodyParser.json())

app.use('/api', api.publicApi)

app.listen(port)
