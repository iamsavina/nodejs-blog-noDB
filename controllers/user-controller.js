

const usersJson = require("../db/users/users.json")
const fs = require('fs');

//hashing the password
const bcrypt = require('bcrypt');
const saltRounds = 10;



let updatedJson = usersJson

const registerUser = async (req,res) =>{
    const {id,name,username,password,image} = req.body

    //assuming image is not required
    if (id && name && username && password){

        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password,salt)
        
        updatedJson = [...updatedJson,{id,name,username,hashedPassword,image}]

        //Updating users database from user.json file
        let data = JSON.stringify(updatedJson);
        fs.writeFile('./db/users/users.json', data, (err) => {
            if (err) return err;
            console.log('Users.json file is updated');
        });
        
        return res.status(200).json({status:"Your data successfully saved",id,name,username,image})
    }
    res.status(404).json({status:"failed",error:"data not received correctly"})
}

const loginUser = async (req,res) =>{
    const {username,password} = req.body

    const user = await updatedJson.find((user)=> user.username === username)

    const resultBoolean = await bcrypt.compare(password,user.hashedPassword)
    
    if (resultBoolean){

        //session maintain
        req.session.user = username
        res.redirect('/blog')
    }else{
        res.end("Wrong password")
    }


}







module.exports = { registerUser,loginUser }