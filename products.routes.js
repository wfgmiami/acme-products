const router = require('express').Router();
const db = require('./products.model');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

router.use(methodOverride('_method'));
router.use(bodyParser.urlencoded({ extended: false}));

router.get('/', (req,res,next)=>{

  res.render('products', { products: db.products })
})

router.get('/:id/edit', (req,res,next)=>{
  res.render('edit',{ product: db.getProduct(req.params.id) })
})

router.delete('/:id', (req, res, next)=>{
  const id = req.params.id;
  const product = db.getProduct(id*1);
  const index = db.products.indexOf(product);
  db.products.splice(index,1);
  res.redirect('/products');
})

router.get('/add', (req, res, next)=>{
  res.render('add')
})

router.post('/', (req,res,next)=>{
  db.add(req.body);
  res.redirect('/products');
})

router.put('/', (req,res,next)=>{
  console.log('get hit');
})
module.exports = router;
