import React , {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Signup from './SignUp/Signup';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import ProfilePage from './Profile_Page/ProfilePage';

class Main extends Component {
    render(){
        return(
            <><div>
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes></>
            
        )
    }
}

export default Main;