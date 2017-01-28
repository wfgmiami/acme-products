const products = [
  { id:1, name:'foo' },
  { id:2, name: 'bar' },
  { id:3, name: 'bazz' }
]

module.exports = {
  products: products,
  getProduct:(id) => products.filter( item => item.id === id*1),
  add: (product) => {
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
    products.forEach( (elem) => {
      if (elem.id === product[0].id){
        elem.name = val;
      }
    })
  },
  delete: (id) => {
    const index = products.indexOf(products.id);
    products.splice(index,1);
  }
}
