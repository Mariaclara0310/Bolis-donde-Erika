const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//const ('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Servidor up"));

app.get('/', function (req, res) {
     res.send('Bienvenidos a mi pagina');
 });
 app.get('/contacto', function (req, res) {
    res.send('Dejanos tu contacto');
 });
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
    
});