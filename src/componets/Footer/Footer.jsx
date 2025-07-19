import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerline">
            <ul className='location'>
                <li>Rwanda</li>
                <li>00:00:00</li>
            </ul>
        </div>
        <div className="footerline">
            <ul className='copyright'>
                <li>© 2023 Kelubeh</li>
                <li>All rights reserved</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer