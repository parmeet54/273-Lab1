import React , {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Signup from './SignUp/Signup';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

class Main extends Component {
    render(){
        return(
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
            )
    }
}

export default Main;