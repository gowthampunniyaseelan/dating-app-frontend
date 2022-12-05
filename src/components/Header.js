import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
    <Button>
      <PersonIcon  fontSize="large" className="header__icon"/>
    </Button>
    <img className='header__logo' src='logo192.png' alt='header'/>
    <Button>
      <ForumIcon fontSize="large" className="header__icon"/>
    </Button>
    </div>
  )
}

export default Header