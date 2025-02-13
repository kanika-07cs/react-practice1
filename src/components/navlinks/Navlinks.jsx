import React from 'react'
import "../../styles/navlink.css"
import mountain from "../../assets/mountain.webp"
import { useNavigate, useNavigation} from 'react-router-dom'

export default function Navlinks() {

    const navigate=useNavigate();

  return (
    <div className='navbar-container'>
    <img src={mountain} alt="logo" width={"200px"}></img>
    <div className='navlinks'>
        <ul>
            <li onClick={()=>navigate('/')}>HOME</li>
            <li onClick={()=>navigate('/About')}>ABOUT</li>
            <li onClick={()=>navigate('/Contact')}>CONTACT</li>
            <li onClick={()=>navigate('/Addmarks')}>ADD MARKS</li>
        </ul>
            
    </div>
    </div>
  )
}