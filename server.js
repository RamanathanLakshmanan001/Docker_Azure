import express, { json } from 'express';

const app = express();
const PORT = 5000;

app.get('/',function (req, res) { 
    res.send('Hello World') 
})

app.listen(PORT, function () { 
    console.log(`App listening on port ${PORT}`) 
})