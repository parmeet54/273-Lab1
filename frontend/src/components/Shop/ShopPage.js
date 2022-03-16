import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemList from '../Item/ItemList';
import { CContainer, CCol, CRow } from '@coreui/react';

import ItemPopup from './ItemPopup';

const ShopPage = (props) => {
    const[name, setName] = useState("");
    const[total_sales, setTotalSales] = useState("");
    const[shop_ID, setShopID]= useState("");
    const[items, setItems] = useState([]);
    const[username, setUsername] = useState("");
    const[valid, setValid] = useState(false);
    const[seen, setSeen] = useState(false);

    useEffect(() => {

        async function getResponse(){

            //let response = axios.get("http://localhost:3001/api/v1/shops/usershop/" + sessionStorage.getItem("token"));
            let response = axios.get("http://localhost:3001/api/v1/shops/" + props.shop)
            response = await response;
            setShopID(response.data[0].shop_ID);
            setName(response.data[0].name);
            setUsername(response.data[0].username);
            setTotalSales(response.data[0].total_sales);
            
            console.log("Shop ID: " + props.shop)

            //getItems();
            //setTimeout(getItems(),1000);

            // if(shop_ID){
            //     getItems();
            //     console.log("HERE")
            // }

        }

        getResponse();

        // async function getItems() {

        //     let response = axios.get("http://localhost:3001/api/v1/items/byshop/" + props.shop)
        //     response = await response;
        //     setItems(response.data);

        //     console.log("Items for Store " + shop_ID + " fetched");
        //     console.log(response);
        // }

        //setTimeout(getResponse(),3000);

        // axios.get("http://localhost:3001/api/v1/items/byshop/" + shop_ID)
        // .then((response) => {
        //     setItems(response.data);
        //     setValid(true);
        // })

        // if(name){
        //     getItems();
        //     console.log("HERE")
        // }

        // setTimeout(getItems(),1000);
        // getItems();


    },[]);

    useEffect(() => {
        async function getItems() {

            let response = axios.get("http://localhost:3001/api/v1/items/byshop/" + props.shop)
            response = await response;
            setItems(response.data);
            // if(items.length > 0){
            //     setValid(true);
            // }

            console.log("Items for Store " + props.shop + " fetched");
            console.log(response);
        }
        getItems();
    },[setItems]);

    const handleSearchChange = (e) => {

    }

    const handleSearchSubmit = () => {

    }

    const handleItemPopup = () => {
        setSeen(!seen);
        console.log("Pressed:" , seen);
    }

     // const handlePopup = () => {
    //     setSeen(!seen);
    // }

    const handleAddItem = () => {
        
    }

    let details = []
    if(items.length > 0){
        details = items.map(item => {
            return(
                <tr>
                    <td>{item.item_ID}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                </tr>
            )
        })
    }

    return(

        

        <div className='App'>

            {/* {items.length> 0 ? setValid(true): setValid(false)} */}

            {seen ? <ItemPopup shop={shop_ID} toggle={handleItemPopup} /> : null}

            <br />My Shop ID is <b>{shop_ID}</b>
            <br />My Shop Name is <b>{name}</b>
            <br />My Username Name is <b>{username}</b>
            <br />My Total Sales are <b>{total_sales}</b>

            <br />
            <br />
            Shop Items:
            <br />
            {items.length > 0 ? 
            <table className='table-center'>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Item Description</th>
                        <th>Item Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {items.length > 0 ? {details}  : ""} */}
                    {details}
                </tbody>
            </table>
            : ""}
            <br/>
            <br/>

            <button onClick={handleItemPopup}>Add Item</button>
            <br/>
            <br/>
            {items.length > 0 ? 
            
                <CContainer>
                <CRow xs={{ cols: 4 }}>
                    <ItemList type={"shop"} items={items}/>
                </CRow>
                </CContainer>
            
            : 
            
            <p>No Items in this shop yet. Add new items</p>}
            {/* {{valid ? items.map(({ item_ID, name, description, quantity }) => (
                <p key={item_ID}>Item name: {name},Description {description}, Quantity: {quantity}.</p>
            )) : <p>NO ITEMS in this Shop</p>}} */}
            

        </div>
    )
}

export default ShopPage;


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
