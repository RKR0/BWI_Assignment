import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';
import connectDB from './config/dataBaseConn.js'
import Userrouter from './routes/UserRoute.js';
import Adminrouter from './routes/AdminRoute.js';


dotenv.config()
const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_NAME = process.env.DATABASE_NAME


// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL,DATABASE_NAME)

// JSON
app.use(express.json())

// Load Routes
app.use("/user",Userrouter)
app.use("/admin",Adminrouter)

app.listen(port,() => {
  console.log(`Server listening at http://localhost:${port}`)
})