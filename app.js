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
*/
// reto: pares e impares
const express = require('express')
const app = express()

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    let $tagCode = '';
    for (let i = 0; i<numbers.length; i++){
        if(numbers[i]%2 === 0)
            {$tagCode += `<p>${numbers[i]} Soy Par!</p>`; }
        else 
            {$tagCode += `<p>${numbers[i]} Soy Impar!</p>`;} 
    }
    res.send($tagCode)
})
app.listen(3000, () => console.log('Listening on port 3000!'))