import express from 'express'
import adminRouter from "./routes/admin.router.js"
import {connectDB} from "./config/db.js"
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

//middleware
app.use(express.json())
app.use(cors({origin: "http://localhost:5173"}))

connectDB()
const port = process.env.PORT || 5001

app.use("/admin", adminRouter)


app.listen(port, () => {
    console.log("Server đang chạy trên cổng: ", port)
})

