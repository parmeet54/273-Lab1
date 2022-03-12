import React , {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Signup from './SignUp/Signup';
import Login from './Login/Login';
import MainNav from './Navbar/MainNav';
import Profile from './Profile/Profile';
import UpdateProfile from './Profile/UpdateProfile';
import Homepage from './HomePage/Homepage';
import Cart from './Cart/Cart';

class Main extends Component {
    render(){
        return(
            <><div>
                <MainNav />
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/updateprofile" element={<UpdateProfile />} />
                <Route path="/cart" element={<Cart />} />

            </Routes></>
            
        )
    }
}

export default Main;