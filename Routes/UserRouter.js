import express from 'express';
import User from '../Models/UserModel.js';
import Data from '../Data.js';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import {generateToken} from '../util.js';


const userRouter = express.Router();

userRouter.get('/seed', (async(req,res)=>{
    await User.remove({});
    const createdUsers = await User.insertMany(Data.userData);
    res.send({createdUsers});
}));

userRouter.post('/signin', (async(req,res)=>{
    const user = await User.findOne({Email: req.body.Email});
    if(user){
        if(bcrypt.compareSync(req.body.Password, user.Password)){
            res.status(200).send({
                _id: user._id,
                Name: user.Name,
                Email: user.Email,
                Token: generateToken(user)
            });
            res.status(200).send({message: 'Login Successful'});
        }
    }else{
        res.status(401).send({message: 'Invalid Email or Password'});
    }

}));


export default userRouter;