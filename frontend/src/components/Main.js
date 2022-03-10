import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import Signup from './SignUp/Signup';

class Main extends Component {
    render(){
        return(
            <div>
                <Route path= "/" component={Signup}/>
                <h2>TESTING</h2>
            </div>
        )
    }
}

export default Main;