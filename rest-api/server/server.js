const express = require('express');
require('./config/config');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/numeros', (req, res) => {
    res.json('GET numeros');
});

app.post('/numeros', (req, res) => {
    let body = req.body;

    if (body.valor === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'los valores de numero son necesarios'
        });
    } else {
        res.json({ numero: body });
    }

});

app.put('/numeros/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/numeros', (req, res) => {
    res.json('DELETE numeros');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});