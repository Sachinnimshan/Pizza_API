import express from 'express';
import Product from '../Models/ProductModel.js';
import Data from '../Data.js';

const productRouter = express.Router();

productRouter.get('/', (async(req,res)=>{
     const pizza = await Product.find({});
     res.send(pizza);
}));


productRouter.get('/seed', (async(req,res)=>{
     await Product.remove({});
     const createdProduct = await Product.insertMany(Data.pizzaData);
     res.send(createdProduct);
}));

productRouter.get('/:id', (async(req,res)=>{
     const singlepizza = await Product.findById(req.params.id);
     if(singlepizza){
          res.send(singlepizza);
     }else{
          res.status(404).send({message: 'Product Not Found'});
     }
}));













export default productRouter;