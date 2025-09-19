import express from 'express'
import adminRouter from "./routes/admin.router.js"
import {connectDB} from "./config/db.js"
import dotenv from 'dotenv'
import cors from 'cors'
import path from "path"

dotenv.config()

const __dirname = path.resolve()

const app = express()

//middleware
app.use(express.json())

if (process.env.NODE_ENV !== 'production'){
    app.use(cors())
}


connectDB()
const port = process.env.PORT || 5001

app.use("/admin", adminRouter)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
    })
}

export default app