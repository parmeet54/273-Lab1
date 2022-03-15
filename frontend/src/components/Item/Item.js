import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'

function Item(props) {
 
    localStorage.setItem("currency", "$");

    return (
        
        <CCard className={`mb-3 border-light border-top-3 border-top-light`} >
        <CCardImage orientation="top" src={props.item.image} width={150} height={200}/>
            <CCardBody>
            <CCardTitle>{props.item.name}</CCardTitle>
            <CCardText>Stock:{props.item.quantity}          {localStorage.getItem("currency")}{props.item.price}</CCardText>
            <CButton href="/item">Item Page</CButton>
            <br/>
            <br/>
            <CButton href="#">Favorite Item</CButton>
            </CCardBody>
        </CCard>        
        
    );
}

// Item.propTypes = {
//   product: React.PropTypes.object.isRequired
// };



export default Item;
