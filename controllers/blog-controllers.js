const checkSession = (req,res)=>{
    if (!req.session.user){
        res.status(401).json({status:"Failed! Please login"})
    }
    res.status(200).json({status:"logged"})
}

module.exports = {checkSession}