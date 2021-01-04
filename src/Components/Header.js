import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

import styles from './Style/Header.module.css';

const logo = 'https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg';

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.header__left}>
      <div className={styles.search}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className>
          <SearchSharpIcon />
        </div>
      </div>
      <input id={styles.inputText} />
    </div>
    <div className={styles.header__mid}>
      <HomeIcon />
      <FlagIcon />
      <SubscriptionsIcon />
      <StorefrontIcon />
      <PeopleAltIcon />
    </div>
    <div className={styles.header__right}>
      <PersonIcon />
    </div>
  </div>
);

export default Header;
