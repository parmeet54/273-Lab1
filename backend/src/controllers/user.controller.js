const userModel = require('../models/user.model');

// Get All Users
exports.getAllUsers = (req,res) => {
    console.log("\nGET ALL USERS");

    userModel.getAllUsers((err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    })
}


// Create a user = Sign Up
exports.createUser = (req,res) => {
    console.log("\nCREATE USER");

    const userData = new userModel(req.body);
    userModel.createUser(userData, (err, result) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("Inside USER CONTROLLER: User Created");
            res.send(result);
        }
        console.log(userData);
    })
}