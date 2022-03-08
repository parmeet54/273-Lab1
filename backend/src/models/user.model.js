const db = require('../../config/db.config');

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
User.createUser = async function(userReqData, result){

    userReqData.password = await bcrypt.hash(userReqData.password, salt);
    db.query('INSERT INTO user SET ?', userReqData, (err, res) => {
        if(err){
            console.log(err);
            result(null, {status:false},err);
        }
        else{
            result(null, {status: true, message:'User Created'});
        }
    })
}

module.exports = User;