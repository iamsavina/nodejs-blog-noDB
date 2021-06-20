const express = require("express")
const router = express.Router()

const {checkSession, showBlogs, showBlogById} =  require('../controllers/blog-controllers')

router.get('/',checkSession,(req,res)=>{
    showBlogs(req,res)
})

router.get('/:id',checkSession,(req,res)=>{
    showBlogById(req,res)
})

module.exports = router