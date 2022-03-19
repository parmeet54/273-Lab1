import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemList from '../Item/ItemList';
import { CContainer, CRow } from '@coreui/react';
import { useParams } from 'react-router';
import ItemPopup from './ItemPopup';

const ShopPage = (props) => {
    const[name, setName] = useState("");
    const[image, setImage]= useState("");
    const[total_sales, setTotalSales] = useState("");
    const[shop_ID, setShopID]= useState("");
    const[items, setItems] = useState([]);
    const[username, setUsername] = useState("");
    const[valid, setValid] = useState(false);
    const[seen, setSeen] = useState(false);
    const[userShop,setUserShop] = useState(false);
    const {id} = useParams();

    // To handle the image input
    const hiddenFileInput = React.useRef(null);

    useEffect(() => {

        async function getResponse(){

            //let response = axios.get("http://localhost:3001/api/v1/shops/usershop/" + sessionStorage.getItem("token"));
            let response = axios.get("http://localhost:3001/api/v1/shops/" + id)
            response = await response;
            setShopID(response.data[0].shop_ID);
            setImage(response.data[0].image);
            setName(response.data[0].name);
            setUsername(response.data[0].username);
            setTotalSales(response.data[0].total_sales);

            if(response.data[0].username === sessionStorage.getItem("token")){
                setUserShop(true);
            }

            console.log("Shop ID: " + id)
        }

        getResponse();

    },[]);

    useEffect(() => {
        async function getItems() {

            let response = axios.get("http://localhost:3001/api/v1/items/byshop/" + id)
            response = await response;
            setItems(response.data);
            // if(items.length > 0){
            //     setValid(true);
            // }

            console.log("Items for Store " + id + " fetched");
            console.log(response);
        }
        getItems();
    },[setItems]);


    // Opens file input upon button press
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleItemPopup = () => {
        setSeen(!seen);
        console.log("Pressed:" , seen);
    }

    const uploadImage = async e=> {
        const files = e.target.files
        const data = new FormData
        data.append('file', files[0])
        data.append('upload_preset', '273-images')

        const res = await fetch(
            'http://api.cloudinary.com/v1_1/ddpcbqqmh/image/upload', 
            {
                method: 'POST',
                body: data
            }
        )

        const file = await res.json()
        setImage(file.secure_url)

        console.log(file.secure_url)

    }

    const updateImage = async e => {

        const newData = {
            name:name,
            total_sales:total_sales,
            image:image
        }

        let response = await axios.put("http://localhost:3001/api/v1/shops/" + id , newData);

        console.log(response)

    }

    return(

        <div className='App'>

            {/* {items.length> 0 ? setValid(true): setValid(false)} */}

            {seen ? <ItemPopup shop={shop_ID} toggle={handleItemPopup} /> : null}

            <img src={image} width={300}/>

            {/* <label>
              Edit Shop Image:
              <input onChange={uploadImage} type="file" name="image" placeholder="Item Image"/>
            </label> */}
            <Button onClick={handleClick}>
                Edit Image
            </Button>
            <input type="file"
                ref={hiddenFileInput}
                onChange={uploadImage}
                style={{display:'none'}} 
            />
            <Button onClick={updateImage}>Update</Button>
            <br />My Shop ID is <b>{shop_ID}</b>
            <br />My Shop Name is <b>{name}</b>
            <br />My Username Name is <b>{username}</b>
            <br />
            
            {userShop ? <h3> My Total Sales are {total_sales} </h3> : "" }

            <br />
            <br />
            Shop Items:
            <br />
            <br/>
            <br/>
            {userShop ? <button onClick={handleItemPopup}>Add Item</button> : ""}
            
            <br/>
            <br/>
            {items.length > 0 ? 
            
                <CContainer>
                <CRow xs={{ cols: 4 }}>
                    {userShop ?     
                        <ItemList type={"shop"} items={items}/>
                        :
                        <ItemList items={items}/>
                    }
                    {/* <ItemList type={"shop"} items={items}/> */}
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
