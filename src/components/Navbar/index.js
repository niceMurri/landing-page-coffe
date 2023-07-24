import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3} from 'react-icons/hi2';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {text: 'Inicio', icon: <HomeIcon />},
    {text: 'Sobre', icon: <InfoIcon />},
    {text: 'Referencias', icon: <CommentRoundedIcon />},
    {text: 'Contatos', icon: <PhoneRoundedIcon />},
    {text: 'Carrinho', icon: <ShoppingCartRoundedIcon />},
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        <h2 >Café Cesár</h2>
      </div>

      <div className="navbar-links-container">
        <a href="/">Inicio</a>
        <a href="/">Sobre</a>
        <a href="/">Referencias</a>
        <a href="/">Contatos</a>
        <a href="/">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Compre agora</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
      </div>

    {/* MENU */}
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{width: 250}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((option) => (
              <ListItem key={option.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>

      </Drawer>

    </nav>
  )
}     

export default Navbar