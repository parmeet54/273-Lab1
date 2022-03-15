import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router";

export default class ShopPopup extends Component {

  constructor(props){
      super(props);
      
      this.state = {
          shop_ID:"",
          name: "",
          created: false
      }

      this.handleClick = this.handleClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  } 
  handleClick = () => {
    this.props.toggle();
  };

  handleNameChange = (e) => {
    this.setState({
        name: e.target.value
    });
  }

  handleSubmit = () => {

    var theRandomNumber = Math.floor(Math.random() * 999) + 1;

    const data= {
        username:sessionStorage.getItem("token"),
        shop_ID:theRandomNumber,
        name: this.state.name,
        total_sales:0

    }
    axios.post("http://localhost:3001/api/v1/shops", data)
    .then(response => {
        console.log(response);
        if(response.status === 200){
            this.setState({
                created:true,
                shop_ID:data.shop_ID
            })
        }
        else{
            console.log(response);
        }
    })
    sessionStorage.setItem("shop", data.shop_ID);

  }




  render() {
    let redirectVar = null;
    if(this.state.created === true){
       redirectVar = <Navigate to= "/home"/>
    }
    return (
      <div className="modal">
        {redirectVar}
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form onSubmit={this.handleSubmit}>
            <h3>Create Shop!</h3>
            <h3>Choose a Name for your New Shop!</h3>
            <label>
              Name:
              <input onChange={this.handleNameChange} type="text" name="name" />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
