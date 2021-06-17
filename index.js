const express = require("express")
const userRoute = require("./routes/users")

const app = express()

app.use(express.json())

app.use('/login', userRoute)

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})