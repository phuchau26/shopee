import Product from "../models/Product.js"

export const getProduct =  async (req,res) => {
    try {
        const products = await Product.findOne({
            _id: "68ca7cab6098d78dca359cc6"
        });
        res.status(200).json(products)
    } catch (error) {
        console.log("Lỗi khi gọi Product: ", error)
        res.status(500).json({message: "Lỗi hệ thống"})
    }
}