import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router";

export default class ItemEditPopup extends Component {

  constructor(props){
      super(props);
      
      this.state = {
          item_ID:this.props.item_ID,
          name: this.props.name,
          image:this.props.image,
          category:this.props.category,
          description:this.props.description,
          price: this.props.price,
          quantity:this.props.quantity,
          fav:this.props.fav,
          edited: false
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

    const data= {
        name: this.state.name,
        image: this.state.image,
        category:this.state.category,
        description: this.state.description,
        price: this.state.price,
        quantity:this.state.quantity,
        fav:this.state.fav

    }
    axios.put("http://localhost:3001/api/v1/items/"+this.props.item.item_ID , data)
    .then(response => {
        console.log(response);
        if(response.status === 200){
            this.setState({
                edited:true
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
      <div className="modal22">
        {/* {redirectVar} */}
        <div className="modal_content22">
          <span className="close22" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit}>
            <h3>Edit Item!</h3>
            <h3>Edit the information for the Selected Item</h3>
            <label>
              Name:
              <input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" placeholder="Item Name"/>
            </label>
            <br />
            <label>
              Image:
              <input value={this.state.image} onChange={this.handleImageChange} type="text" name="image" placeholder="Item Image"/>
            </label>
            <br />
            <label>
              Category:
              <input value={this.state.category} onChange={this.handleCategoryChange} type="text" name="category" placeholder="Item Category"/>
            </label>
            <br />
            <label>
              Description:
              <input value={this.state.description} onChange={this.handleDescriptionChange} className='item-description-input' type="text" name="description" placeholder="Enter Description "/>
            </label>
            <br />
            <label>
              Price:
              <input value={this.state.price} onChange={this.handlePriceChange} type="text" name="price" placeholder="Enter Price"/>
            </label>
            <br />
            <label>
              Quantity:
              <input value={this.state.quantity} onChange={this.handleQuantityChange} type="text" name="quantity" placeholder="Total Quantity"/>
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
