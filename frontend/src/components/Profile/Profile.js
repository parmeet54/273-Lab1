import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ShopPopup from '../Shop/ShopPopup';
import { Navigate } from 'react-router';

const Profile = () => {
    const[username, setUsername] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[seen, setSeen] = useState(false);
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

    // const handlePopup = () => {
    //     setSeen(!seen);
    // }

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




// import React , {Component} from 'react';
// import axios from 'axios';

// class Profile extends Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             user: {
//                 name:"",
//                 email:""
//             }
//         }
//     }

//     async componentDidUMount(){
//         axios.get("http://localhost:3001/api/v1/users/" + localStorage.getItem("token"))
//         .then((response) => {
//             this.setState({
//                 user:response.data[0],
//             })
//             console.log("RESPONSE ", response.data)
//             console.log("STATE",this.state.user)
//         });
//     }
//     render(){
//         return(
//             <div>
//                 User Profile here, Hello <b>{localStorage.getItem("token")}</b>

//                 User Profile here, Hello <b>{this.state.user.name}</b>

//             </div>
//             )
//     }
// }

// export default Profile;
