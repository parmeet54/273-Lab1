import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[about, setAbout] = useState("");
    const[city, setCity] = useState("");
    const[dob, setDOB] = useState("");
    const[address, setAddress] = useState("");
    const[country, setCountry] = useState("");
    const[phone_no, setPhone] = useState("");
    const[message , setMessage] = useState("");
    const[updated,setUpdated] = useState(false);

    
    // useEffect(() => {
    //     axios.get("http://localhost:3001/api/v1/users/" + localStorage.getItem("token"))
    //     .then((response) => {
    //         //setUser(response.data[0]);
    //         setUsername(response.data[0].username);
    //         setName(response.data[0].name);
    //         setEmail(response.data[0].email);
    //         //console.log(response.data[0]);
    //     });
    //     console.log("Username:", username);
    // });

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedData = {
            name: name,
            email: email,
            about: about,
            city: city,
            dob: dob,
            address: address,
            country: country,
            phone_no: phone_no
        }

        axios.put("http://localhost:3001/api/v1/users/" + sessionStorage.getItem("token") , updatedData)
        .then((response) => {
            setMessage(response);
            setUpdated(true);
        });
    }

    let redirectVar = null;

    if(updated === true){
        redirectVar =  <Navigate to= "/profile"/>
    }

    console.log("\n Inside User Profile")

    return(        
        <div className='App'>
            {redirectVar}
            <br/>
            <br/>
            ***Profile Picture Here***
            <br/>
            <br/>
            You Are: {sessionStorage.getItem("token")};
            <br/>
            <br/>
            ***Other Information***
            <br/>
            <div>
                <h2>Update Profile here</h2>
                <div>
                    Name: 
                    <input onChange={(e) => setName(e.target.value)} type='text' name="name" placeholder='Name'></input>
                </div>
                <br/>
                <div>
                    Email: 
                    <input onChange={(e) => setEmail(e.target.value)} type='text' name="email" placeholder='New Email'></input>
                </div>
                <br/>
                <div>
                    About: 
                    <input className='about-input' onChange={(e) => setAbout(e.target.value)} type='text' name="about" placeholder='Write about yourself!'></input>
                </div>
                <br/>
                <div>
                    City: 
                    <input onChange={(e) => setCity(e.target.value)} type='text' name="city" placeholder='City'></input>
                </div>
                <br/>
                <div>
                    dob: 
                    <input onChange={(e) => setDOB(e.target.value)} type='text' name="dob" placeholder='Date of birth'></input>
                </div>
                <br/>
                <div>
                    address: 
                    <input onChange={(e) => setAddress(e.target.value)} type='text' name="address" placeholder='Full Address'></input>
                </div>
                <br/>
                <div>
                    country: 
                    <input onChange={(e) => setCountry(e.target.value)} type='text' name="country" placeholder='Country'></input>
                </div>
                <br/>
                <div>
                    Phone Number: 
                    <input onChange={(e) => setPhone(e.target.value)} type='text' name="phone_no" placeholder='Phone Number'></input>
                </div>
                <br/>
                <button onClick={handleUpdate}>Update Profile</button>
            </div>
        </div>
    )
}

export default UpdateProfile;

