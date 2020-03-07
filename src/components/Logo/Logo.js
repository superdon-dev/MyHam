import React from 'react'
import logo from '../../assets/logo.png';
import classes from './Logo.css';
const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={logo} alt="MyBurger"/>
        </div>
    )
}

export default Logo
