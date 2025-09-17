import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        url: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        discount: {
            type: Number,
            required: true
        },

        sale: {
            type: Number,
            required: true,
            default: 0
        }
    },

    {
        timestamps: true, //Tự tạo 2 trường createdAt và updatedAt
        collection: "shopee"
    }
)

const Product = mongoose.model("Product", productSchema)
export default Product