import React , {useEffect, useState} from 'react';
import axios from 'axios';
import ItemList from '../Item/ItemList';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react';
import FavItems from '../Profile/FavItems';

const Cart = () => {
    const[cartItems,setCartItems] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/cart/byuser/" + sessionStorage.getItem("token"))
        .then((response) => {
           setCartItems(response.data)

        });
    },[]);

    const handleCheckout = () => {
        
    }


    console.log("\n Inside Cart Page")

    return(
        <div className='App'>

            {console.log(cartItems)}

            <br/>
            <br/>               
            
            <h1>Your Cart</h1>
  
            <br/>  

            <CTable>
            <CTableHead color="light">
                <CTableRow>
                <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {cartItems.map(({ image, name, quantity, price }) => (
                   
                   <CTableRow>
                   <CTableHeaderCell scope="row"><img src={image} width={100}/></CTableHeaderCell>
                   <CTableDataCell>{name}</CTableDataCell>
                   <CTableDataCell>{quantity}</CTableDataCell>
                   <CTableDataCell>{localStorage.getItem("currency")}{price}</CTableDataCell>
                   </CTableRow>
                
                ))}
            </CTableBody>
            </CTable>
        </div>
    )
}

export default Cart;

