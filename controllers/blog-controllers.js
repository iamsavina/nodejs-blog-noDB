let blogJson = require("../db/blog/blogs.json")

const checkSession = (req,res,next)=>{
    if (!req.session.user){
        return res.status(401).json({status:"Failed! Please login"})
    }
    next()
}

const showBlogs = (req,res)=>{
    res.status(200).json(blogJson)
}

const showBlogById = (req,res) =>{
    const {id} = req.params
    const selectedBlog = blogJson.find((blog)=> blog.id === Number(id))
    res.status(200).json(selectedBlog)
    
}

module.exports = {checkSession,showBlogs,showBlogById}