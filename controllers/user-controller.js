const usersJson = require("../db/users/users.json")
const fs = require('fs');

let updatedJson = usersJson

const registerUser = (req,res) =>{
    const {id,name,username,password,image} = req.body

    //assuming image is not required
    if (id && name && username && password){

        updatedJson = [...updatedJson,{id,name,username,password,image}]
        
        //Updating users database from user.json file
        let data = JSON.stringify(updatedJson);
        fs.writeFile('./db/users/users.json', data, (err) => {
            if (err) return err;
            console.log('Users.json file is updated');
        });
        
        return res.status(200).json({status:"Your data successfully saved",id,name,username,password,image})
    }
    res.status(404).json({status:"failed",error:"data not received correctly"})
}







module.exports = { registerUser }