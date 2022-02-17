import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  price: number;
  name: string;
  description: string;
  quantity: number;
  image: string;
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
