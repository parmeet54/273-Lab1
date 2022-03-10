import React , {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            auth:false,
            message: ""
        }

        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHander = this.passwordChangeHander.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    passwordChangeHander = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    submitLogin = (e) => {
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        
        axios.post("localhost:3001/api/v1/login", data)
            .then(response => {
                console.log("Status code" , response.status);

                if(response.status === 200){
                    this.setState({
                        auth: true
                    })
                }
                else{
                    this.setState({
                        message: "Could Not Sign Up"
                    })
                }
            })
    }

    render(){
        return(
            <div>
                <h2>Login Here</h2>
                <div>
                    <input onChange={this.emailChangeHandler} type='email' name="email" placeholder='email'></input>
                </div>
                <div>
                    <input onChange={this.passwordChangeHander} type='password' name="password" placeholder='password'></input>
                </div>
                <button onClick={this.submitLogin}>Login</button>
            </div>
        );
    }
}

export default Login;