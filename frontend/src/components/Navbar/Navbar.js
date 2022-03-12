import React , {Component} from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            profile: false,
            search:false
        }

        this.onProfileClick = this.onProfileClick.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onProfileClick = (e) => {
        this.setState({
            profile:true
        })
    }

    onSearch = (e) => {
        this.setState({
            search:true
        })
    }

    render(){
        // let redirectVar = null;
        // if(this.state.profile === true){
        //     redirectVar = <Navigate to={"/profile"}/>
        // }
        // else if(this.state.search === true){
        //     redirectVar = <Navigate to={"/search"}/>
        // }

        return(
            <div>
                {/* {redirectVar} */}
                Navbar Here!!
                <Link to="/profile" className="btn btn-primary">User Profile</Link>
            </div>
        )
    }
}

export default Navbar;