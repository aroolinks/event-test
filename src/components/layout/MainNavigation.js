import { useContext } from 'react';
import React, { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorite-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to='/'> All Meetups</Link>
          </li>
          <li>
            <Link to='/New-Meetup'> Add New Meetups</Link>
          </li>
          <li>
            <Link to='/Favorites'>
              My Favorites
              <span className={classes.badge}>
                {' '}
                {favoritesCtx.totalFavorites}{' '}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
