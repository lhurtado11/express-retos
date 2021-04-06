//reto:codigo secreto
/*const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('<h1>HcUy6Re2LLBRtj</h1>')
})

app.listen(3000, () => console.log('Listening on port 3000!'))

//reto: saludame 1
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const name = req.query.nombre || 'desconocido'
    res.send(`<h1>Hola ${name}!</h1>`)
})
app.listen(3000, () => console.log('Listening on port 3000!'))

//reto: saludame 2
const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
    const name = req.params.name

    res.send(`<h1>Hola ${name.replace(/^\w/, (c) => c.toUpperCase())}!</h1>`)
})
app.listen(3000, () => console.log('Listening on port 3000!'))

// reto: pares e impares
const express = require('express')
const app = express()

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    let $tagCode = '';
    for (let i = 1; i<=50; i++){
        if(i%2 === 0)
            {$tagCode += `<p>${i} Soy Par!</p>`; }
        else 
            {$tagCode += `<p>${i} Soy Impar!</p>`;} 
    }
    res.send($tagCode)
})
app.listen(3000, () => console.log('Listening on port 3000!'))
*/

// RETO SALUDAME 3
const express = require('express');
const app = express();

app.set ('view engine', 'pug');
app.set ('views', 'views');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {
    res.send(`<h1> Hola ${req.body.name}!</h1>`);
})

app.listen(3000, () => console.log('Listening on port 3000!'));
