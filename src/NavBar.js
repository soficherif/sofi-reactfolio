import React from 'react'
import HeaderOption from './HeaderOption'
import './NavBar.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIcon from '@mui/icons-material/Phone';

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='NavBar__left'>
                <h2>Sofi Cherif</h2>
            </div>

            <div className='NavBar__right'>
                <HeaderOption Icon={AccessibilityNewIcon} title='About'/>
                <HeaderOption Icon={FolderIcon} title='Projects'/>
                <HeaderOption Icon={PhoneIcon} title='Contact'/>
            
            </div>

    </div>
  )
}

export default NavBar