import { createContext, useState } from "react";

const FavoritsContext = createContext({
  favorits: [],
  totalItem: 0,
  addFavorits: (favoritsMeetups) => {},
  removeFavorits: (meetupId) => {},
  isFavorite: (meetupId) => {}
});

export function FavoritsContextProvider(props) {
  const [userFavorits, setUserFavorits] = useState([]);

  function addFavoritshandler(favoritsMeetups) {
    setUserFavorits((prevUserFavorits) => {
      return prevUserFavorits.concat(favoritsMeetups);
    });
  }

  function removeFavoritsHandler(meetupId) {
    setUserFavorits((prevUserFavorits) => {
      return prevUserFavorits.filter(item => item.id !== meetupId);
    })
  }

  function isFavoriteHandler(meetupId) {
    return userFavorits.some((item) => item.id === meetupId);
  }

  const context = {
    favorits: userFavorits,
    totalItem: userFavorits.length,
    addFavorits: addFavoritshandler,
    removeFavorits: removeFavoritsHandler,
    isFavorite: isFavoriteHandler
  };

  return <FavoritsContext.Provider value={context}>{props.children}</FavoritsContext.Provider>
}

export default FavoritsContext;