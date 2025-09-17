import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);

        console.log("Liên kết database thành công!")
    }catch(error){
        console.log("Lỗi khi kết nối database: ", error)
    }
}

