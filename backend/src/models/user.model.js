const db = require('../../config/db.config');

// Encryption
const bcrypt = require('bcrypt');
const salt = 10;

var User = function(user){
    this.username = user.username;
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
    this.about = user.about;
    this.city = user.city;
    this.dob = user.dob;
    this.address = user.address;
    this.country = user.country;
    this.phone_no = user.phone_no;
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


// Get User by username
User.getUserByUsername = (username, result) => {

    db.query('SELECT * FROM user WHERE username = ?', username , (err,res) => {
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
User.updateProfile = async(username, userReqData, result) => {

    db.query('UPDATE user SET email=?, name=?, about=?, city=?, dob=?, address=?, country=?, phone_no=? WHERE username=?' , 
    [userReqData.email, userReqData.name, userReqData.about, userReqData.city, userReqData.dob, userReqData.address, userReqData.country, userReqData.phone_no, username], 
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