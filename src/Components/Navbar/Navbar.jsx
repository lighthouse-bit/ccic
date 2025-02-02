import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assests/image.png'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about us")}}><Link style={{textDecoration: 'none'}} to='/about us'>About Us</Link>{menu==="about us"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("our work")}}><Link style={{textDecoration: 'none'}} to='/our work'>Our Work</Link>{menu==="our work"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("blog")}}> <Link style={{textDecoration: 'none'}} to='/blog'>Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("more")}}> <Link style={{textDecoration: 'none'}} to='/more'>More</Link>{menu==="more"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration: 'none'}} to='/login'><button>Donate Now</button></Link>
        </div>
    </div>
  )
}

export default Navbar

