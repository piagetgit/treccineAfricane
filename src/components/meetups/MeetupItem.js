import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props){
    const favoritesCtx= useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    /*function toggleDetailsStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{

            favoritesCtx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.urlImage
            });
        }
        
    }*/


    return <li className="list-inline-item">
            <Card >
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content} bg="#ff3300">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                   
                </div>
             
                <div className={classes.actions}>
                    <button onClick="{toggleDetailsStatusHandler}">Detais</button>
                </div>
                
            </Card>
            <p></p> 
            <p></p>
    </li>;
}

export default MeetupItem;