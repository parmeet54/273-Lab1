import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { CContainer, CRow, CCol, CButton } from '@coreui/react';

const ItemPage = (props) => {

    const[item, setItem]= useState({});
    const[fav,setFav] = useState(false);
    const[shopName, setShopName] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {


        async function getItem(){
 
            let response = axios.get("http://localhost:3001/api/v1/items/"+ id);
            response = await response;

            setItem(response.data[0]);
            console.log(response.data[0])
        }

        getItem();

        
        // axios.get("http://localhost:3001/api/v1/items/" + id)
        // .then((response) => {
        //     //setUser(response.data[0]);
        //     setItem(response.data[0])
        //     console.log(response.data);

        //     if(response.data[0].fav ===1){
        //         setFav(true);
        //     }
        //     else{
        //         setFav(false);
        //         //setFav(false);
        //     }
        // });

    },[setItem]);


    useEffect(()=> {

        async function getShopName(){
 
            let response = axios.get("http://localhost:3001/api/v1/shops/"+ item.shop);
            response = await response;

            setShopName(response.data[0].name);
            console.log(response.data[0].name)
            
        }

        getShopName();
    },[setShopName])


    

    const handleFavorite = () => {

        const data = {
            fav:"1"
        }
        ;
        axios.put("http://localhost:3001/api/v1/items/fav/"+ item.item_ID, data)
        .then(response => {
            setFav(true);
        })
        console.log("Item Favorited")
        window.location.reload(false);
    }

    const handleUnFav = () => {

        const data = {
            fav:"0"
        }

        axios.put("http://localhost:3001/api/v1/items/fav/"+ item.item_ID, data)
        .then(response => {
            setFav(false);
        })
        console.log("Item UnFavorited")
        window.location.reload(false);
    }

    const onNavigateShopPage = () => {
        navigate("/shop/" + item.item_ID);
    }

    const handleSearchChange = (e) => {

    }

    const handleSearchSubmit = () => {

    }

    return(
        <><div>
            {/* {seen ? <ShopPopup name="TESTING" toggle={handlePopup} /> : null} */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <CContainer>

            <CRow className="justify-content-between">
                <CCol ><img src={item.image} width={600}/></CCol>

                <CCol>


                    { fav ?  
                    
                    <CButton color='link' onClick={handleUnFav} ><img src='/faved.png' width={50}/></CButton> 
                
                    :   
                    
                    <CButton color='link' onClick={handleFavorite} ><img src='/unfaved.png'width={50}/></CButton>
                
                    }

                </CCol>

                <CCol>
                    
                    <h1><b>{item.name}</b></h1>

                    <br /><br /> 
                    <CButton color='link' onClick={onNavigateShopPage}> {shopName}</CButton>
                   
                    
                    <br /><br />
                    Description: <b>{item.description}</b>


                    <br /><br />
                    Item Shop <b>{item.shop}</b>

                    <br /><br />
                    Price <b>{localStorage.getItem("currency") + item.price}</b>

                    <br /><br />
                    Stock: <b>{item.quantity}</b>

                    <br /><br />
                    <CButton color='secondary' >Add to Cart</CButton>
                    
                </CCol>
            </CRow>

                
            </CContainer>

         

           

            <br />
            {/* <br /><Link to="/updateProfile" className="btn btn-primary">Update Profile</Link>

        
            <div className='App'>
                <br/>
                <br/>
                <br/>
                <Link to="/createshop" className="btn btn-primary">Create Shop</Link>
            </div> */}

            
        </div>
       </>
    )
}

export default ItemPage;
