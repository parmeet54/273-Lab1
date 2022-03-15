import React , {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Signup from './SignUp/Signup';
import Login from './Login/Login';
import MainNav from './Navbar/MainNav';
import Profile from './Profile/Profile';
import UpdateProfile from './Profile/UpdateProfile';
import Homepage from './HomePage/Homepage';
import Cart from './Cart/Cart';
import ShopPage from './Shop/ShopPage';
import CreateShop from './Shop/CreateShop';
import axios from 'axios';
import ItemList from './Item/ItemList';

class Main extends Component {

    render(){

        const shop = sessionStorage.getItem("shop");
        const user = sessionStorage.getItem("token");

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
                <Route path="/shop" element={<ShopPage shop={shop}   />} />
                <Route path="/createShop" element={<CreateShop/>}/>

            </Routes></>
            
        )
    }
}

export default Main;