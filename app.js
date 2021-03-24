//reto:codigo secreto
/*const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('<h1>HcUy6Re2LLBRtj</h1>')
})

app.listen(3000, () => console.log('Listening on port 3000!'))
*/
//reto: saludame 1
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hola ${req.query.name}!</h1>`)
})
app.listen(3000, () => console.log('Listening on port 3000!'))