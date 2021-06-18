const express = require("express")
const userRoute = require("./routes/users")
const blogRoute = require("./routes/blog")

const app = express()

app.use(express.json())

app.use('/login', userRoute)

app.use('/blog', blogRoute )

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})