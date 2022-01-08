import React from 'react'
import { useContext } from 'react';
import { DetailsContext } from "./../store/DetailsContext";

import "./Details.css";

function Details() {
    const { braid, setBraid } = useContext(DetailsContext);

    return (
        <div className="detail">
            <div className="title">{braid.title}</div>
            <div className="allDetails">
                <div className="elements">
                    <img src={braid.image} alt={braid.title} />
                </div>
                <div className="elements">
                    <div className="description">
                        <p>{braid.description}</p>
                    </div>
                    <div className="price">
                        <p>{braid.price}</p>
                    </div>
                    <div className="makeTime">
                        <p>{braid.makeTime}</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Details
