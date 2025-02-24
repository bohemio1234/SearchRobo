import React from 'react';
import './Card.css'

const Card = ({id, name, email}) => {
    return(
        <div class="card" style={{width: "20rem"}}>
            <img class="card-img-top"src={`https://robohash.org/${id}`}
            alt="photo"
            />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{email}</p>
            </div>
        </div>
    )
}

export default Card;