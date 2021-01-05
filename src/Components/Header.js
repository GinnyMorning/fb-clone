import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcons from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Style/Header.css';

const logo = 'https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg';

const Header = () => (
  <div className="header">
    <div className="header__left">
      <img src={logo} alt="logo" className="logo" />
      <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </div>
    </div>
    <div className="header__mid">
      <div className="header__options header__options--active">
        <HomeIcon fontSize="large" />
      </div>
      <div className="header__options">
        <FlagIcon fontSize="large" />
      </div>
      <div className="header__options">
        <SubscriptionsIcon fontSize="large" />
      </div>
      <div className="header__options">
        <StorefrontIcon fontSize="large" />
      </div>
      <div className="header__options">
        <PeopleAltIcon fontSize="large" />
      </div>
    </div>
    <div className="header__right">
      <div className="header__info">
        <Avatar />
        <h4>ToanPLQ</h4>
      </div>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
      <IconButton>
        <NotificationActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcons />
      </IconButton>
    </div>
  </div>
);

export default Header;
