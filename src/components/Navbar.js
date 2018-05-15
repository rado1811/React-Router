import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
      return (
            <div>
                <NavLink to="/"> Accueil </NavLink>
                <NavLink to="/notre-histoire"
                        activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                        }}> Notre histoire</NavLink>
            </div>
            );
        }
  }
  
  export default Navbar;