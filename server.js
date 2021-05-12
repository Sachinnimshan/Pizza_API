import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import productRouter from './Routes/ProductRouter.js';
import userRouter from './Routes/UserRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const DB_CONN = process.env.CONNECTION_URL;
const PORT = process.env.SERVER_PORT || 5000;


mongoose.connect(DB_CONN,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})
.then(()=> app.listen(PORT, ()=> {console.log(`Database Connected & Server Started @ http://localhost:${PORT}`)}))
.catch((error)=> console.log(error));
mongoose.set('useFindAndModify', false);


app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.get('/', (req,res)=>{
    res.send("Server is Ready");
});

