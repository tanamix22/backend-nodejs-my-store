const express = require('express')
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res)=>{
  const products = []
  const { size } = req.query;
  const limit = size  ||  10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      Image: faker.image.imageUrl(),
    })

  }
  res.json(products)
});

router.get('/:productId', (req, res)=>{
  const {productId} = req.params
  if(productId === "0"){
    res.status(404).json({
      message:"error"
    })
  }else{
    res.json({
      productId,
      name: 'Product 1',
      price: 3000,
    })
  }

});

router.post('/', (req,res)=>{
  const body = req.body;
  res.status(201).json({
    message: "created",
    data:body
  })
})

router.patch('/:productId', (req,res)=>{
  const { productId } = req.params
  const body = req.body;
  res.json({
    message: "update",
    data:body,
    productId
  })
})

router.delete('/:productId', (req,res)=>{
  const { productId } = req.params
  const body = req.body;
  res.json({
    message: "delated",
    productId
  })
})

module.exports = router
