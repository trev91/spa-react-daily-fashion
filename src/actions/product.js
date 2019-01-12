// import axios from 'axios';
import product from './../dummydata/product.json';


export const getProduct = () => {
  // basic API call when live...
  // axios.get('/apiUrlHere').then((response) => {
  //   return response;
  // })
  return product;

}

export const buyProduct = (products) => {
  // basic API call when live...

  let productData = []
  products.map((product) => {
    let newProd = {};
    newProd["sizeId"] = product.size.id;
    newProd["colorId"] = product.color.id;
    newProd["quantity"] = product.quantity;
    productData.push(newProd);
  })
  const formData = {
    products: productData
  }
  // return axios.post('/apiUrlHere', formData,
  //   {
  //     headers:
  //     {
  //       // auth stuff
  //     }
  //   }).then(res => {
  //     // do something with the successful response
  //   })
  //   .catch(err => {
  //     // alert user that something went wronge
  //   });
  console.log(formData)
  // let response = {}
  // response["status"] = 200
  return;
}