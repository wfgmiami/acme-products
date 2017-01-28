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


app.get('/', (req, res, next)=>{
  res.render('index');
})

app.use('/products', require('./products.routes'))

/*
app.delete('/:id', (req,res,next)=>{
  const id = req.params.id * 1;
  const product = products.filter( product => product.id === id)[0];
  const index = products.indexOf(product);
  products.splice(index,1);
  res.redirect('/');

  //res.send(`your id is ${req.params.id}`)
})
*/

const port = process.env.PORT;
app.listen(port, ()=>{
console.log(`Listening on port ${port}`);
});
