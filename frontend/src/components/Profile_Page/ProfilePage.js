import React , {Component} from 'react';
import axios from 'axios';

class ProfilePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                name:"Parmeet",
                email:""
            }
        }
    }

    async componentDidUMount(){
        axios.get("http://localhost:3001/api/v1/users/" + localStorage.getItem("token"))
        .then((response) => {
            this.setState({
                user:response.data,
                name:response.data.name
            })
            console.log("RESPONSE ", response.data)
            console.log("STATE",this.state.user)
        })
    }
    render(){
        return(
            <div>
                User Profile here, Hello <b>{localStorage.getItem("token")}</b>

                User Profile here, Hello <b>{this.state.user.name}</b>

            </div>
            )
    }
}

export default ProfilePage;