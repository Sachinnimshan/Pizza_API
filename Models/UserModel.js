import express from 'express';
import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
    Name: {type: String, required: true, unique: true},
    Email: {type: String, required: true, unique: true},
    Password: {type: String, required: true}
},{
    timestamps: true
});


const User = mongoose.model("User", UserModel);

export default User;