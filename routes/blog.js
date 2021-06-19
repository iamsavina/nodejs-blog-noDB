const express = require("express")
const router = express.Router()

const {checkSession} =  require('../controllers/blog-controllers')

router.get('/',(req,res)=>{
    checkSession(req,res)
    console.log("Blog details")
})

module.exports = router