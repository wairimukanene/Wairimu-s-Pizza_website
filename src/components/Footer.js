import React from 'react'   
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='SocialMedia'>
            
            <Instagram/>
            <Facebook/>
            <Twitter/>
            <LinkedIn/>
        </div>
        <p>&copy; Wairimu's Pizzeria 2023 - All rights reserved</p>
      
    </div>
  )
}

export default Footer
