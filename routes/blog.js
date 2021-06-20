const express = require("express")
const router = express.Router()

const {
    checkSession,
    showBlogs, 
    showBlogById, 
    editBlog, 
    deleteBlog, 
    addBlog,
    logout
} =  require('../controllers/blog-controllers')


router.get('/',checkSession,(req,res)=>{
    showBlogs(req,res)
})

router.get('/:id',checkSession,(req,res)=>{
    showBlogById(req,res)
})

router.post('/add',checkSession,(req,res)=>{
    addBlog(req,res)
})

router.put('/:id/edit',checkSession,(req,res)=>{
    editBlog(req,res)
})

router.delete('/delete',checkSession, (req,res)=>{
    deleteBlog(req,res)
})

router.get('/logout',checkSession,(req,res)=>{
    logout(req,res)
})

module.exports = router