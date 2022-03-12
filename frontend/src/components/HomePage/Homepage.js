import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const[username, setUsername] = useState("");
    const[name, setName] = useState("TEST");
    const[email, setEmail] = useState("");
    const[user, setUser] = useState({});


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


    console.log("\n Inside Home Page")

    return(
        <div className='App'>
            <br/>
            <br/>               
            HOME PAGE

            <br/>  
            <br/>  
            <br/>  

            Hello, {sessionStorage.getItem("token")}

        </div>
    )
}

export default Homepage;

