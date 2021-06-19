const express = require("express")
const session = require("express-session")

const userRoute = require("./routes/users")
const blogRoute = require("./routes/blog")

const app = express()

app.use(express.json())

//setup sessions
app.use(session({secret:'aVerySecretPassword'}))

//routing traffics
app.use('/login', userRoute)
app.use('/blog', blogRoute )

//run the server
app.listen(8000,()=>{
    console.log("Server running on port 8000")
})