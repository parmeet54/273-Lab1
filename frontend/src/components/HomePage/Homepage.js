import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import ItemList from '../Item/ItemList';
import { CContainer, CRow } from '@coreui/react';

const Homepage = () => {
    const[username, setUsername] = useState("");
    const[name, setName] = useState("TEST");
    const[email, setEmail] = useState("");
    const[user, setUser] = useState({});
    const[items, setItems] = useState([])

    // const item = {
    //     name:"Test",
    //     image:"default.jpeg",
    //     price:100
    // }

    useEffect(() => {
        async function getItems() {

            let response = axios.get("http://localhost:3001/api/v1/items/")
            response = await response;
            setItems(response.data);
            // if(items.length > 0){
            //     setValid(true);
            // }
            console.log(response);
        }
        getItems();
    },[setItems]);


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
            <h1>Welcome to Etsy</h1>

            <br/>  
            <br/>
            <br/>
            {/* <Item item={item}/> */}

            <CContainer>
                <CRow xs={{ cols: 5 }}>
                    <ItemList items={items}/>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Homepage;

