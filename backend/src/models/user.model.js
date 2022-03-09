const db = require('../../config/db.config');

// Encryption
const bcrypt = require('bcrypt');
const salt = 10;

var User = function(user){
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
}


User.getAllUsers = (result) =>{
    db.query('SELECT * FROM user', (err,res) =>{
        if(err){
            console.log("Error while getting users: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    })
}

// Create user = Sign Up
User.createUser = async (userReqData, result) => {

    userReqData.password = await bcrypt.hash(userReqData.password, salt);
    db.query('INSERT INTO user SET ?', userReqData, (err, res) => {
        if(err){
            console.log(err);
            result(null, {status:false, message:"user exists"},err);
        }
        else{
            result(null, {status: true, message:'User Created'});
        }
    })
}


// Get User by Email
User.getUserByEmail = (email, result) => {

    db.query('SELECT * FROM user WHERE email = ?', email , (err,res) => {
        if(err){
            console.log("Error while fetching user data", err);
            result(null, err);
        }
        else{
            console.log("User Fetched");
            result(null , res);
        }
    })
}


// Update Profile
User.updateProfile = async(email, userReqData, result) => {

    const encryptedPass = await bcrypt.hash(userReqData.password , salt)
    db.query('UPDATE user SET password=?, name=? WHERE email=?' , 
    [encryptedPass , userReqData.name, email], 
    (err, res) => {
        if(err){
            console.log(err);
            result(null ,err);
        }
        else{
            console.log("Profile updated");
            console.log(res);
            result(null , {message: "User Updated" , status: true});
        }
    })
}

module.exports = User;