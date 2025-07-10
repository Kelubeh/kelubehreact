import React from 'react'
import Apps from '../../assets/Apps.svg?react'
import Settings from '../../assets/Settings.svg?react'
import Profile from '../../assets/Account.svg?react'
import './Navbar.css'
import Logo from '../../assets/Apps.svg?react'

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="Leftnav">
            <Logo className="logo1" alt="Logo" />
        </div>
        <div className="Rigthnav">
            <ul>
                <li><Apps className="icon" /></li>
                <li><Profile className="icon" /></li>
                <li><Settings className="icon" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar