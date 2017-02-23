let Model = [
  {
    id: 1,
    name: 'sports',
    products: [{
      id: 1,
      name: "tennis racket"
    }]
  }
]

var getId = function(array){
  
  let maxId = array.reduce((memo, cat)=>{
    if (cat.id > memo){
      memo = cat.id
      return memo;
    }
  },0)
  
  return ++maxId;
}

const getCategory = function(id) {
  return this.getCategories().filter( cat => cat.id === id)[0]

}

const getCategories = function() {
  return Model;
}

const insertCategory = function(cat) {
  // let id = getId(Model);
  // cat.id = id;
  const categories = getCategories();
  cat.id = getId(categories);
  this.getCategories().push(cat)
  return cat;
}

const deleteCategory = function(id) {
  // let index = this.getCategories().indexOf(this.getCategory(id))
  // this.getCategories().splice(index, 1);
  Model = Model.filter( category => category.id !== id);
}

const insertProduct = function(id, prod) {
  var cat = this.getCategory(id);
  
//   if (cat.products){
//     let prodId = getId(cat.products)
//     prod.id = prodId;
//     cat.products.push(prod)
//   }else{
//     prod.id = 1
//     cat.products = [prod]
//   }
  if (!cat.products){
    cat.products = [];
  }
  prod.id = getId(cat.products)
  cat.products.push(prod)
  
  //return cat;
}

const deleteProduct = function(catId, prodId) {
  // let cat = this.getCategory(catId);
  // let prod = cat.products.filter( prod => prod.id === prodId );
  // let index = cat.products.indexOf(prod);
  // cat.products.splice(index,1);
  const cat = this.getCategory(catId);
  cat.products = cat.products.filter( prod => prod.id !== prodId);
  
}

module.exports = {
  getCategories,
  getCategory,
  insertCategory,
  deleteCategory,
  insertProduct,
  deleteProduct
}