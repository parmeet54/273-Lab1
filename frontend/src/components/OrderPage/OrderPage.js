import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { CTable, CTableHead, CTableRow,CTableHeaderCell, CTableBody, CTableDataCell, CButton } from '@coreui/react';
import { useNavigate } from 'react-router';

const OrderPage = () => {
    const[orderItems,setOrderItems] = useState([]);
    const[total, setTotal] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/orders/" + sessionStorage.getItem("token"))
            .then((response) => {
            const items = response.data
            setOrderItems(items);
            });
    },[]);

    console.log("\n Inside Orders Page")

    return(
        <div className='App'>

            {console.log(orderItems)}
            <br/>
            <br/>               
            
            <h1>My Purchases</h1>
            <br/>  
            <CTable>
            <CTableHead color="light">
                <CTableRow>
                <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Order #</CTableHeaderCell>
                <CTableHeaderCell scope="col">Shop Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date of  Purchase</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {orderItems.length > 0 ? 
        
                    orderItems.map(({ image, name, order_ID, shop, quantity, price, date_purc }) => (
                    
                    <CTableRow>
                        <CTableHeaderCell align={'middle'} scope="row"><img src={image} width={100}/></CTableHeaderCell>
                        <CTableDataCell align={'middle'}>{name}</CTableDataCell>
                        <CTableDataCell align={'middle'}>{order_ID}</CTableDataCell>
                        <CTableDataCell align={'middle'}>{shop}</CTableDataCell>
                        <CTableDataCell align={'middle'}>{quantity}</CTableDataCell>
                        <CTableDataCell align={'middle'}>{localStorage.getItem("currency")}{price}</CTableDataCell>
                        <CTableDataCell align={'middle'}>{date_purc}</CTableDataCell>
                    </CTableRow>
                    ))  
                    : 
                    <h2>You have not made any orders. Items will appear here after you make any purchase(s).</h2>
                }
            </CTableBody>

            </CTable>
        </div>
    )
}

export default OrderPage;

