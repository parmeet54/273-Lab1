import React , {Component} from 'react';
import axios from 'axios';
import {Navigate} from 'react-router';

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            name: "",
            created:false,
            message: ""
        }

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHander = this.passwordChangeHander.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
    }

    usernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        });
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

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitSignup = (e) => {

        //prevent page from refresh
        e.preventDefault();

        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }
        
        axios.post("http://localhost:3001/api/v1/users", data)
            .then(response => {
                console.log("Status code" , response.status);

                if(response.status === 200){
                    this.setState({
                        created: true
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
        if(this.state.created === true){
           redirectVar = <Navigate to= "/login"/>
        }
        return(
            <div>
                {redirectVar}
                <h2>Sign Up Here</h2>
                <div>
                    <input onChange={this.usernameChangeHandler} type='text' name="username" placeholder='username'></input>
                </div>
                <div>
                    <input onChange={this.emailChangeHandler} type='text' name="email" placeholder='email'></input>
                </div>
                <div>
                    <input onChange={this.passwordChangeHander} type='password' name="password" placeholder='password'></input>
                </div>
                <div>
                    <input onChange={this.nameChangeHandler} type='text' name="name" placeholder='name'></input>
                </div>

                <button onClick={this.submitSignup}>Sign Up</button>
            </div>
        );
    }
}

export default Signup;