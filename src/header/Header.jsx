import React from 'react'
import '../css/Header.css'
const Header = (props) => {
    return (
        <div className='header'>
            <h2 className='title'>Todo-ETHEREUM</h2>
            <h3 className='account'>Your account: {props.account}</h3>
        </div>
    )
}

export default Header
