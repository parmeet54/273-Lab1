import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router';
import FavItems from './FavItems';

const Profile = () => {
    const[username, setUsername] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[image,setImage] = useState("");
    const[user, setUser] = useState({});
    const[favItems,setFavItems] = useState([]);
 

    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/users/" + sessionStorage.getItem("token"))
        .then((response) => {
            setUser(response.data[0]);
            setUsername(response.data[0].username);
            setName(response.data[0].name);
            setEmail(response.data[0].email);
            setImage(response.data[0].image);
            //console.log(response.data[0]);
        });
        console.log("Username:", username);

        axios.get("http://localhost:3001/api/v1/items/")
        .then(response => {
            setFavItems(response.data.filter(item =>item.fav === "1"));
        })

    },[]);

    
    return(
        <><div className='App'>
            {/* {seen ? <ShopPopup name="TESTING" toggle={handlePopup} /> : null} */}

            <img src={image} width={300}/>
            <br />User Profile here, Hello <b>{name}</b>

            <br />My Email is <b>{email}</b>

            <br />My Username is <b>{username}</b>

            <br />
            <br />
            <Link to="/updateProfile" state={{ user: user }} className="btn btn-primary">Update Profile</Link>

            <Link to="/orders" style={{marginLeft:100}} className="btn btn-primary">View My Orders</Link>

            {sessionStorage.getItem("shop") ? 
                ""
            :

                <Link to="/createshop"  className="btn btn-primary">Create Shop</Link>
            }

            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <FavItems favItems={favItems}/>
            </div>

        </div>
       </>
    )
}

export default Profile;
