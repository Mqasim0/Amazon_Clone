import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider/StateProvider';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className={styles.header}>
      <Link to='/'>
        <img
          className={styles.header_logo}
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>
      <div className={styles.header_search}>
        <input className={styles.header_searchInput} type='text' />
        <SearchIcon className={styles.header_searchIcon} />
      </div>
      <div className={styles.header_nav}>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className={styles.header_option}>
            <span className={styles.header_optionLineOne}>
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className={styles.header_optionLineTwo}>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Returns</span>
          <span className={styles.header_optionLineTwo}>Orders</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Your</span>
          <span className={styles.header_optionLineTwo}>Prime</span>
        </div>
      </div>
      <Link to='/checkout'>
        <div className={styles.header_optionBasket}>
          <ShoppingBasketIcon />
          <span
            className={(styles.header_optionLineTwo, styles.header_basketCount)}
          >
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
