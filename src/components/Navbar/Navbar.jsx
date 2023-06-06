import React, { useContext, useState } from 'react'
import  './Navbar.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
// import logoIcon from '/images/dark-mode.png'
// import DarkMode from '../Darkmode/DarkMode/DarkMode'
function Navbar() {
    const [active, setActive] = useState(false)
 
    
  return (
    <div className="container">
        <div className='logo'>
            <Link to="/" className='log'>
            <img src='/images/logo.svg' />
            <span>Reno Chats</span>
            </Link>
        </div>
        <div className= "links">
            <ul  className={active ? "link show-menu" : "link"}>
                <li> 
                <Link>
                <span>About</span> 
                </Link>
                </li>
                <li> 
                <Link>
                <span>Explore</span> 
                </Link>
                </li>
                <li> 
                <Link>
                <span>Developers</span>
                </Link>
                 </li>
                <li> 
                <Link>
                <span>Company</span>
                </Link>
                 </li>
                <li> 
                <Link>
                <span>Community</span> 
                </Link>
                </li>
                <li className="tog">
                   <div>
                   {/* <DarkMode /> */}
                   </div> 
                </li>
            </ul>
        </div>
        <div className='prompt'>
            <div>
            <Link to="/login">

            <span>Login</span>
            </Link>

            </div>
            <div className='btn-container'>
            <Link to="/signup">

            <Button className="btn" text="Get Started" />
            </Link>

            </div>
        </div>
        <div className="hambuger" onClick={ () => setActive(!active)}>
            <img src="/images/grid-outline.svg"  />
        </div>

    </div>
  )
}

export default Navbar


