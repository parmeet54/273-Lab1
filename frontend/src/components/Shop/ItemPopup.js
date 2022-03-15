import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router";

export default class ItemPopup extends Component {

  constructor(props){
      super(props);
      
      this.state = {
          item_ID:"",
          name: "",
          image:"",
          category:"",
          description:"",
          price: "",
          quantity:"",
          fav:"",
          created: false
      }

      this.handleClick = this.handleClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  // Handles the pop up toggle
  handleClick = () => {
    this.props.toggle();
  };

  handleNameChange = (e) => {
    this.setState({
        name: e.target.value
    });
  }

  handleImageChange = (e) => {
    this.setState({
        image: e.target.value
    });
  }

  handleCategoryChange = (e) => {
    this.setState({
        category: e.target.value
    });
  }

  handleDescriptionChange = (e) => {
    this.setState({
        description: e.target.value
    });
  }

  handlePriceChange = (e) => {
    this.setState({
        price: e.target.value
    });
  }

  handleQuantityChange = (e) => {
    this.setState({
        quantity: e.target.value
    });
  }

  handleSubmit = () => {

    var theRandomNumber = Math.floor(Math.random() * 999) + 1;

    const data= {
        item_ID:theRandomNumber,
        shop: this.props.shop,
        name: this.state.name,
        image: this.state.image,
        category:this.state.category,
        description: this.state.description,
        price: this.state.price,
        quantity:this.state.quantity,
        fav:0

    }
    axios.post("http://localhost:3001/api/v1/items", data)
    .then(response => {
        console.log(response);
        if(response.status === 200){
            this.setState({
                created:true
            })
        }
        else{
            console.log(response);
        }
    })
  }




  render() {
    // let redirectVar = null;
    // if(this.state.created === true){
    //    redirectVar = <Navigate to= "/shop"/>
    // }
    return (
      <div className="modal11">
        {/* {redirectVar} */}
        <div className="modal_content11">
          <span className="close11" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit}>
            <h3>Add an Item!</h3>
            <h3>Enter the information for the Item</h3>
            <label>
              Name:
              <input onChange={this.handleNameChange} type="text" name="name" placeholder="Item Name"/>
            </label>
            <br />
            <label>
              Image:
              <input onChange={this.handleImageChange} type="text" name="image" placeholder="Item Image"/>
            </label>
            <br />
            <label>
              Category:
              <input onChange={this.handleCategoryChange} type="text" name="category" placeholder="Item Category"/>
            </label>
            <br />
            <label>
              Description:
              <input onChange={this.handleDescriptionChange} className='item-description-input' type="text" name="description" placeholder="Enter Description "/>
            </label>
            <br />
            <label>
              Price:
              <input onChange={this.handlePriceChange} type="text" name="price" placeholder="Enter Price"/>
            </label>
            <br />
            <label>
              Quantity:
              <input onChange={this.handleQuantityChange} type="text" name="quantity" placeholder="Total Quantity"/>
            </label>
            <br />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
