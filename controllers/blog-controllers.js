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

const editBlog = (req,res) => {
    const {id} = req.params
    const {title,content,label} = req.body

    const selectedBlog = blogJson.find((blog)=> blog.id === Number(id))
    if (!selectedBlog){
        res.status(404).json({status:"requested blog not found"})
    }

    blogJson = blogJson.map((blog)=> {
        if (blog.id === Number(id)){            
            if (title){
                blog.title = title
            }
            if (content){
                blog.content = content
            }
            if (label){
                blog.label = label
            }
        }
        return blog
    })

    res.status(200).json(blogJson)

}

const deleteBlog = (req,res) =>{
    const {id} = req.body
    const selectedBlog = blogJson.find((blog) => blog.id === Number(id))
    if (!selectedBlog){
        res.status(404).json({status:"requested blog not found"})
    }
    blogJson = blogJson.filter((blog)=> blog.id !== Number(id))
    res.status(200).json(blogJson)
}

const addBlog = (req,res)=>{
    const {title,content,label} = req.body

    // auto increment id //
    const lastBlog = JSON.stringify(blogJson[Object.keys(blogJson).sort().pop()])
    const id = JSON.parse(lastBlog).id + 1

    blogJson = [...blogJson,{id,title,content,label}]

    res.status(200).json(blogJson)

}

const logout =(req,res)=>{
    // res.clearCookie(this.cookie, { path: '/' })
    // req.logout();
    // res.redirect('/')

    req.session.destroy()
    res.json({"status":"ok"})
}

module.exports = {checkSession,showBlogs,showBlogById,editBlog,deleteBlog,addBlog,logout}