const router = require('express').Router();
const db = require('./products.model');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

//if you are using methodOverride or body parser you are probably going to use it for the entire application
router.use(methodOverride('_method'));
router.use(bodyParser.urlencoded({ extended: false}));

router.get('/', (req,res,next)=>{

  res.render('products', { products: db.products })
})

router.get('/:id/edit', (req,res,next)=>{
  res.render('edit',{ product: db.getProduct(req.params.id) })
})

router.delete('/:id', (req, res, next)=>{
  const id = req.params.id*1;
  db.delete(id);
  res.redirect('/products');
})

router.get('/add', (req, res, next)=>{
  res.render('add')
})

router.post('/', (req,res,next)=>{
  db.add(req.body);
  res.redirect('/products');
})

router.put('/:id', (req,res,next)=>{
  const id = req.params.id*1;
  const newValue = req.body.name;//what if you were updating more than the name?
  const product = db.getProduct(id);
  db.edit(product, newValue);
  res.redirect('/products');
})
module.exports = router;
