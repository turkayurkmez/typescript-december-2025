import mongoose, { Schema, Document } from 'mongoose';

// Product interface
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category?: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Product Schema
const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Ürün adı gereklidir'],
      trim: true,
      maxlength: [100, 'Ürün adı en fazla 100 karakter olabilir']
    },
    description: {
      type: String,
      required: [true, 'Açıklama gereklidir'],
      trim: true,
      maxlength: [500, 'Açıklama en fazla 500 karakter olabilir']
    },
    price: {
      type: Number,
      required: [true, 'Fiyat gereklidir'],
      min: [0, 'Fiyat 0\'dan küçük olamaz']
    },
    category: {
      type: String,
      trim: true
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // createdAt ve updatedAt otomatik eklenir
  }
);

// Model
export const Product = mongoose.model<IProduct>('Product', ProductSchema);
