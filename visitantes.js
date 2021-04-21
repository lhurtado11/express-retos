const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
// conexión con mongodb localmente y enlace al envento error
mongoose.connect( 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true , useUnifiedTopology: true });
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
