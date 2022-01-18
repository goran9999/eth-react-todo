import React from 'react'
import '../css/Header.css'
import {FaEthereum} from 'react-icons/fa'
const Header = (props) => {
    return (
        <div className='header'>
            <div style={{display:'flex',flexDirection:'row'}}>
            <FaEthereum style={{height:'45px',width:'25px',marginTop:'15px',marginLeft:'35px'}}/>
            <h2 className='title'>Todo-ETHEREUM</h2>
            </div>
            <h3 className='account'>Your account: {props.account}</h3>
        </div>
    )
}

export default Header
