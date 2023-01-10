const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res)=>{
  res.send("hola mi server en express")

});

/* app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId } = req.params
  res.json({
    categoryId,
    productId,
  })
}); */

routerApi(app)

app.listen(port, ()=>{
  console.log(`My port: http://localhost:${port}`);
})

