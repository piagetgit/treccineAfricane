import classes from './BraidItem.module.css';
import Details from './Details';
//import { useNavigate } from "react-router-dom";

import Card from '../ui/Card';

function BraidItem(props) {
    return <li className="list-inline-item">
        <Card >
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
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

export default BraidItem;