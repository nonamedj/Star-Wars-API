import React from "react";
import {Menu, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";


function Navbar(){

    return (
        <Menu inverted id="nav-bar">
            <Container>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <a className="navbar-brand" href="/">
                        <img className="sw-logo" src="https://i.ibb.co/T17pBCC/sw-logo.png" alt="sw-logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" name="button">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                         <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/people' className="nav-link">
                                     <Menu.Item name="people" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/planets' className="nav-link">
                                     <Menu.Item name="planets" />
                               </Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/starships' className="nav-link">
                                    <Menu.Item name="starships" />
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/films' className="nav-link">
                                    <Menu.Item name="films" />
                              </Link>
                            </li>
                        </ul>
                    </div>
                 </nav>
            </Container>
        </Menu>
        
                
                
 
               
           
    )
}
export default Navbar;