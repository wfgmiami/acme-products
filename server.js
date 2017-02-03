const express = require('express');
const app = express();
const swig = require('swig');
swig.setDefaults({ cache: false });
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.get('/', (req, res, next)=> res.render('index') );


app.use('/products', require('./products.routes'))

const port = process.env.PORT;

//this could also be on one line..
app.listen(port, ()=>{
console.log(`Listening on port ${port}`);
});
