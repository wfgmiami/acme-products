const products = [
  { id:1, name:'foo' },
  { id:2, name: 'bar' },
  { id:3, name: 'bazz' }
]

module.exports = {
  products: products,
  getProduct:(id) => products.filter( item => item.id === id*1),//this is returning a collection - have it return one product
  add: (product) => {
    //pull this logic out... create a method called nextId() or something-- you don't have to export it.
    let max = products.reduce( (max, elem)=> {
      if (elem.id > max){
        max = elem.id;
      }
      return max;
    },0)

    product.id = ++max;
    products.push(product);
  },
  edit: (product, val) => {
    //is product a collection of products?
    //you really should only need to send the id and updated product
    //naming - call elem _product.. because it's a product :)
    products.forEach( (elem) => {
      if (elem.id === product[0].id){
        elem.name = val;//
      }
    })
  },
  delete: (id) => {
    const index = products.indexOf(products.id);
    products.splice(index,1);
  }
}
