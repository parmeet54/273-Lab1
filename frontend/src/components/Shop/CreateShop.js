import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';

const CreateShop = () => {
    const[name, setName] = useState("");
    const[available, setAvailability] = useState();
    const[created, setCreated] = useState();
    const[shops, setShops]= useState([]);
    const[note, setNote]= useState("");


    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/shops/")
        .then((response) => {
            if(response){
                setShops(response.data);
                console.log(shops);
            }
        });

    },[]);

    
    const handleNameChange = (e) => {
        setName(e.target.value)
      
    }

    const handleAvailabiliy = () => {

        if(shops.find(c => c.name == name)){
            setAvailability(false);
            setNote("Choose another name");
        }
        else{
            setAvailability(true);
        }
        console.log(available);

    }

    const handleSubmit = () => {

        var theRandomNumber = Math.floor(Math.random() * 999) + 1;
    
        const data= {
            username:sessionStorage.getItem("token"),
            shop_ID:theRandomNumber,
            name: name,
            total_sales:0
        }
        if(available){
            axios.post("http://localhost:3001/api/v1/shops", data)
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    //setShop(data.shop_ID)
                    setCreated(true);
                    sessionStorage.setItem("shop", data.shop_ID);
                    console.log("Shop Created", data.shop_ID)
                }
                else{
                    console.log(response);
                }
            })
        }    
      }

    let redirectVar = null;
    if(created === true){
        redirectVar = <Navigate to= "/shop"/>
    }

    return(
        
        <><div className='App'>
            {redirectVar}
            <br/>
            <br />Create New Shop

            <br />Name your Shop something Unique and Special!

            <br />
            <br />
            <br />

            <input onChange={handleNameChange} type='text' name="name" placeholder='Shop Name' style={{ marginLeft: 20, width:400 }} ></input>
            <button onClick={handleAvailabiliy}>Check Availability</button>
            <br/>{available== true ? "Available": available== false ? "Not Available" : ''}
            <br/><button onClick={handleSubmit}>Create Shop</button>
            <br/> 
            
        </div>
       </>
    )
}

export default CreateShop;
