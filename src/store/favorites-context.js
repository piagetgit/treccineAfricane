import { createContext ,useState} from "react";
//import {useState} from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (favoriteMeetup) =>{},
    removeFavorite: (meetupId) =>{},
    itemIsFavorite: (meetupId) =>{}
});

export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites] = useState([]);
    
    function addFavoritesHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoritesHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id=== meetupId)
    }

    const context ={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemFavoriteHandler
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;