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
// const express = require('express');
// const app = express();

// app.set ('view engine', 'pug');
// app.set ('views', 'views');

// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//         res.render('index');
// })

//  app.post('/', (req, res) => {
//     res.send(`<h1> Hola ${req.body.name}! </h1>`);
//  })

// app.listen(3000, () => console.log('Listening on port 3000!'));


// // reto encabezados
// const express = require('express');
// const app = express();
// app.set ('view engine', 'pug');
// app.set ('views', 'views');

// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//         res.send(req.header('user-agent'));
// })

// app.listen(3000, () => console.log('Listening on port 3000!'));
// reto visitantes 
// requiriendo librerias
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// // conexión con mongodb localmente y enlace al envento error
// mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true , useUnifiedTopology: true });
// mongoose.connection.on("error", function(e) {console.log(e); });
// // definimos el esquema
// const schema = mongoose.Schema({
//     name: String,
//     date:{type: Date, default: Date.now}
// });
// // creación del modelo
// const Visitor = mongoose.model("Visitor", schema);

// app.get('/', (req, res) => {
//     const name = req.query.name || 'Anónimo';
//     // creando un documento
//     const visitor = new Visitor({ name: `${name}` });
//     visitor.save(function(err) {
//         if (err) return console.log(err);
//     });
//     res.send(`<h1>El visitante fue almacenado con éxito</h1>`);
// });
// app.listen(3000, () => console.log('Listening on port 3000!'));
// RETO: VISITANTES RECURRENTES
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
// conexión con mongodb localmente y enlace al envento error
mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on("error", function(e) {console.log(e); });
// definimos el esquema
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        default: 1,
      },

});
// creación del modelo
const VisitorSchema = mongoose.model("Visitor", schema);

app.get('/', async (req, res) => {
  try {
    const visitorExists = await VisitorSchema.findOne({name:req.query.name});
    if(visitorExists && visitorExists.name !== 'Anónimo') {
      await VisitorSchema.findById(visitorExists.id, (err,visitor) => {
        visitor.count += 1;
        visitor.save();
      });
    } else {
      await VisitorSchema.create({name:req.query.name || 'Anónimo'});
    }
    const visitors = await VisitorSchema.find();
    return res.render('visitantes', {
      pageTitle: 'Visitantes recurrentes',
      visitors,
    });
  }  catch (error) {
    console.log (error);
    res.status(500);
  }
});
app.listen(3000, () => console.log('Listening on port 3000!'));
