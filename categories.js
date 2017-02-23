const router = require('express').Router();
const db = require('./db');

router.get('/', (req,res,next)=>{
  res.render('categories', { cats: db.getCategories() })
})

router.get('/:id', (req,res,next)=>{
  res.render('category', { cat: db.getCategory(req.params.id*1) })
})

router.post('/', (req, res, next)=>{
  const cat = db.insertCategory(req.body);
  res.redirect(`/categories/${cat.id}`);
})

router.post('/:id/products', (req,res,next)=>{
  db.insertProduct(req.params.id*1, req.body);
  res.redirect(`/categories/${req.params.id}`)
})

router.delete('/:id', (req, res, next)=>{
  db.deleteCategory(req.params.id*1);
  res.redirect('/categories');
})

router.delete('/:catId/products/:id', (req, res, next)=>{
  db.deleteProduct(req.params.catId*1, req.params.id*1);
  res.redirect(`/categories/${req.params.catId}`)
})

module.exports = router;