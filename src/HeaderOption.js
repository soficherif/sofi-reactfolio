import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIcon from '@mui/icons-material/Phone';
import './HeaderOption.css'

function HeaderOption({Icon, title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        <h3 className="headerOption__title">{title}</h3>

    </div>
  )
}

export default HeaderOption