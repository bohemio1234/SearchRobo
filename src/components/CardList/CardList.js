import React from 'react';
import Card from '../Card/Card'

const CardList = ({ robots }) => {
    return(
        <div class="container">
            <div class="row">
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                        key={i}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        />
                    )
                })
            }
            </div>
        </div>    
    )
};

export default CardList;