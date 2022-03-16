import React from 'react';
import {useEffect, useState} from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'
import { createBrowserHistory } from 'history'
import ItemEditPopup from './ItemEditPopup';
import axios from 'axios';


function Item(props) {

    const[seen, setSeen] = useState(false);
 
    localStorage.setItem("currency", "$");

        
    const handleFavorite = () => {

    }

    const handleUnFav = () => {

    }

    const onNavigateItemPage = () => {
        createBrowserHistory.push("/itempage/" + props.item.item_ID)
    }

    const handleItemPopup = () => {
        setSeen(!seen);
        console.log("Pressed:" , seen);
    }


    return (
        
        <div>
            {seen ? <ItemEditPopup item={props.item} toggle={handleItemPopup} /> : null}

            <CCard className={`mb-3 border-light border-top-3 border-top-light`} >
            <CCardImage orientation="top" src={props.item.image} width={150} height={200}/>
                <CCardBody>
                <CCardTitle>{props.item.name}</CCardTitle>
                <CCardText>Stock:{props.item.quantity}</CCardText>          
                <CCardText>{localStorage.getItem("currency")}{props.item.price}</CCardText>
                
                <CButton onClick={onNavigateItemPage} href="/item">Item Page</CButton>
                <br/>
                <br/>
                <CButton onClick={handleFavorite} href="#">Favorite Item</CButton>

                <br/>
                <br/>
                {props.type === "shop" ?   <CButton onClick={handleItemPopup}>Edit Item</CButton>  :  ""}
                
            </CCardBody>
            </CCard> 

        </div>     
        
    );
}

// Item.propTypes = {
//   product: React.PropTypes.object.isRequired
// };


export default Item;
