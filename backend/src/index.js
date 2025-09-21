import express from 'express'
import adminRouter from "./routes/admin.router.js"
import productRouter from "./routes/product.router.js"
import {connectDB} from "./config/db.js"
import dotenv from 'dotenv'
import cors from 'cors'
import path from "path"

dotenv.config()

const __dirname = path.resolve()

const app = express()


// middleware
app.use(express.json())

// Cho phép cả local & production
const allowedOrigins = [
  "http://localhost:3000",       // nếu bạn chạy frontend ở port 3000
  "http://localhost:5173",       // nếu dùng Vite
  "https://shopeeapp.vercel.app" // domain thật trên Vercel
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

connectDB()

app.use("/admin", adminRouter)
app.use("/product", productRouter)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
    })
}

export default app