import React from 'react';
import { useContext } from 'react';
import FavoriteContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

function Favorites() {
  const favoritesCtx = useContext(FavoriteContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet Start Adding Some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h2>Favorites</h2>
      {content}
    </section>
  );
}
export default Favorites;
