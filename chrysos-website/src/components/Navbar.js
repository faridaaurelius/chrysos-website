import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // In a real app, you would implement search functionality here
    console.log('Searching for:', event.target.value);
  };

  const drawer = (
    <div className="drawer-container">
      <div className="drawer-header">
        <IconButton className="drawer-menu">
          <img src="/icons/hamburger.png" alt="Menu" className="nav-icon" />
        </IconButton>
        <IconButton onClick={handleDrawerToggle} className="drawer-close">
          <img src="/icons/close.png" alt="Close" className="nav-icon" />
        </IconButton>
      </div>
      <List className="drawer-list">
        <ListItem button component={RouterLink} to="/products" onClick={handleDrawerToggle}>
          <ListItemText primary="ALL PRODUCTS" className="drawer-item-large" />
        </ListItem>
        <ListItem button component={RouterLink} to="/seamoss" onClick={handleDrawerToggle}>
          <ListItemText primary="SEAMOSS" className="drawer-item" />
        </ListItem>
        <ListItem button component={RouterLink} to="/beauty" onClick={handleDrawerToggle}>
          <ListItemText primary="BEAUTY" className="drawer-item" />
        </ListItem>
        <ListItem button component={RouterLink} to="/home" onClick={handleDrawerToggle}>
          <ListItemText primary="HOME" className="drawer-item" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-container" disableGutters>
        {/* Left Section */}
        <div className="navbar-left">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="menu-button"
          >
            <img src="/icons/hamburger.png" alt="Menu" className="nav-icon" />
          </IconButton>
          <div className="search-container">
            <InputBase
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon className="search-icon" />
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="navbar-center">
          <RouterLink to="/" className="navbar-logo-container">
            <img
              src="/chrysos_text_logo_no_background-white.png"
              alt="Chrysos Logo"
              className="navbar-logo"
            />
            <img
              src="/sparkle.svg"
              alt="sparkle"
              className="logo-sparkle"
            />
          </RouterLink>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <IconButton className="nav-icon" aria-label="change language">
            <img src="/icons/globe.png" alt="Language" className="nav-icon" />
          </IconButton>
          <IconButton className="nav-icon" aria-label="user account">
            <img src="/icons/user-avatar.png" alt="User" className="nav-icon" />
          </IconButton>
          <IconButton
            component={RouterLink}
            to="/cart"
            className="nav-icon"
            aria-label="shopping cart"
          >
            <img src="/icons/shopping-cart.png" alt="Cart" className="nav-icon" />
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 