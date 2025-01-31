const express = require('express');

const cors = require('cors');

require('dotenv').config();

const routerApi = require('./routes');

const app = express();

const port = process.env.PORT || 2000;

//antes de usar post
app.use(express.json());

app.use(cors());

app.get('/', (req,res) => {
    res.json({message: "Bienvenido a mi servidor"});
});

app.get('/nueva-ruta', (req, res) => {
    res.status(200).json({message: "Esta es una nueva ruta"});
})

routerApi(app);

//Acá vienen las midlewares;

//

app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`);
});
