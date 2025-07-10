import React from 'react'
import Apps from '../../assets/Apps.svg?react'
import Settings from '../../assets/Settings.svg?react'
import Profile from '../../assets/Account.svg?react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="Leftnav">
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