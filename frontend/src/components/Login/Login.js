import React , {Component} from 'react';
import axios from 'axios';
import {Navigate} from 'react-router';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            auth:false,
            message: ""
        }

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHander = this.passwordChangeHander.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    usernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    passwordChangeHander = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    submitLogin = (e) => {
        const data = {
            username: this.state.username,
            password: this.state.password,
        }
        
        axios.post("http://localhost:3001/api/v1/login", data)
            .then(response => {
                console.log("Status code" , response.status);

                if(response.status === 200){
                    sessionStorage.setItem("token", data.username);

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
        let redirectVar = null;
        if(this.state.auth === true){
           redirectVar = <Navigate to= "/"/>
        }
        return(
            <div>
                {redirectVar}
                <h2>Login Here</h2>
                <div>
                    <input onChange={this.usernameChangeHandler} type='text' name="username" placeholder='username'></input>
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