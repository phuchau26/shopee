import Product from "../models/Product.js"

export const getAdmin =  async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        console.log("Lỗi khi gọi getAdmin: ", error)
        res.status(500).json({message: "Lỗi hệ thống"})
    }
}