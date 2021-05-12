import mongoose from 'mongoose';
import express from 'express';

const ProductSchema = new mongoose.Schema({
    Title : {type: String, required: true, unique: true},
    Type: {type: String, required: true},
    Category: {type: String, required: true},
    Image: {type : String, required: true},
    Description: {type: String, required: true},
    Price_Personal: { type: Number, required: true},
    Price_Medium: { type: Number, required: true},
    Price_Large: { type: Number, required: true}
},{
    timestamps: true
});


const Product = mongoose.model("Product", ProductSchema);


export default Product;