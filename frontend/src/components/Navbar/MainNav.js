import React , {Component, useEffect, useState} from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {Navbar, Nav, Container, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

import { CNavbar, CContainer, CNavbarBrand, CCollapse, CNavbarNav, CNavItem, CNavLink,
    CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu, CDropdownDivider, CForm, CFormInput, CButton } from '@coreui/react/';

const MainNav = () => {

    const [query, setQuery]= useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        
    },[]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearchSubmit = () => {
        navigate("/search/"+query);
        window.location.reload(false);
    }
    
    return(
        <div className='nav'>
            {/* {redirectVar} */}
            <img className='logo-center' src="/Etsy_logo.png" alt="Etsy Nav logo" width={50} height={25} style={{marginRight:50}}></img>
            <Link to="/" className="btn btn-primary" style={{marginRight:50}} >Home</Link>
            <input onChange={handleSearchChange} type='search bar' name="search" placeholder='Search Any Item'></input>
            <button onClick={handleSearchSubmit} type="submit" style={{marginRight:50}}>Search</button>
            <Link to="/favorites" className="btn btn-primary" style={{marginRight:50}}>Favorites Page</Link>
            <Link to="/profile" className="btn btn-primary" style={{marginRight:50}}>User Profile</Link>
            <Link to="/shop" className="btn btn-primary" style={{marginRight:50}}>Shop Page</Link>
            <Link to="/cart" className="btn btn-primary">Cart</Link>

        </div>

    )
}

// class MainNav extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             search: ""
//         }

//         // this.navigate = this.navigate.bind(this);
//         this.handleSearchChange = this.handleSearchChange.bind(this);
//         this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
//     }

//     // onProfileClick = (e) => {
//     //     this.setState({
//     //         profile:true
//     //     })
//     // }

//     // onSearch = (e) => {
//     //     this.setState({
//     //         search:true
//     //     })
//     // }
    
//     // navigate = useNavigate();

//     handleSearchChange = (e) => {
//         this.setState({
//             search:e.target.value
//         })
//     }

//     handleSearchSubmit = () => {
//         useNavigate("/search/"+this.state.search);
//     }

//     render(){
//         // let redirectVar = null;
//         // if(this.state.profile === true){
//         //     redirectVar = <Navigate to={"/profile"}/>
//         // }
//         // else if(this.state.search === true){
//         //     redirectVar = <Navigate to={"/search"}/>
//         // }

//         return(
//             <div className='nav'>
//                 {/* {redirectVar} */}
//                 <img className='logo-center' src="/Etsy_logo.png" alt="Etsy Nav logo" width={50} height={25} style={{marginRight:50}}></img>
//                 <Link to="/" className="btn btn-primary" style={{marginRight:50}} >Home</Link>
//                 <input onChange={this.handleSearchChange} type='search bar' name="search" placeholder='Search Any Item'></input>
//                 <button onClick={this.handleSearchSubmit} style={{marginRight:50}}>Search</button>
//                 <Link to="/favorites" className="btn btn-primary" style={{marginRight:50}}>Favorites Page</Link>
//                 <Link to="/profile" className="btn btn-primary" style={{marginRight:50}}>User Profile</Link>
//                 <Link to="/shop" className="btn btn-primary" style={{marginRight:50}}>Shop Page</Link>
//                 <Link to="/cart" className="btn btn-primary">Cart</Link>

//             </div>
            
//         //     <Navbar bg="light" expand="lg">
//         //     <Container fluid>
//         //       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         //       <Navbar.Toggle aria-controls="navbarScroll" />
//         //       <Navbar.Collapse id="navbarScroll">
//         //         <Nav
//         //           className="me-auto my-2 my-lg-0"
//         //           style={{ maxHeight: '100px' }}
//         //           navbarScroll
//         //         >
//         //           <Nav.Link href="#action1">Home</Nav.Link>
//         //           <Nav.Link href="#action2">Link</Nav.Link>
//         //           <Nav.Link href="#" disabled>
//         //             Link
//         //           </Nav.Link>
//         //         </Nav>
//         //         <Form className="d-flex">
//         //           <FormControl
//         //             type="search"
//         //             placeholder="Search"
//         //             className="me-2"
//         //             aria-label="Search"
//         //           />
//         //           <Button variant="outline-success">Search</Button>
//         //         </Form>
//         //       </Navbar.Collapse>
//         //     </Container>
//         //   </Navbar>
//         )
//     }
// }

export default MainNav;