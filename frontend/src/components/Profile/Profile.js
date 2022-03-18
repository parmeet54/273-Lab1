import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router';

const Profile = () => {
    const[username, setUsername] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[user, setUser] = useState({});


    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/users/" + sessionStorage.getItem("token"))
        .then((response) => {
            //setUser(response.data[0]);
            setUsername(response.data[0].username);
            setName(response.data[0].name);
            setEmail(response.data[0].email);
            console.log(response.data[0]);
        });
        console.log("Username:", username);
    },[]);

    const handleSearchChange = (e) => {

    }

    const handleSearchSubmit = () => {

    }

    return(
        <><div className='App'>
            {/* {seen ? <ShopPopup name="TESTING" toggle={handlePopup} /> : null} */}

            <br />User Profile here, Hello <b>{name}</b>

            <br />My Email is <b>{email}</b>

            <br />My Username is <b>{username}</b>

            <br />
            <br /><Link to="/updateProfile" className="btn btn-primary">Update Profile</Link>

            <input onChange={handleSearchChange} type='text' name="search" placeholder='Search Favorites' style={{ marginLeft: 200 }}></input>
            <button onClick={handleSearchSubmit}>Search</button>
            <div className='App'>
                <br/>
                <br/>
                <br/>
                <Link to="/createshop" className="btn btn-primary">Create Shop</Link>
            </div>

        </div>
       </>
    )
}

export default Profile;
