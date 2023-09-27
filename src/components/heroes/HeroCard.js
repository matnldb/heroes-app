import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alterEgo,
    firstAppearance,
    characters,
}) => {
  return ( 
    <div className="card ms-3">
        <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero}/>
        <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alterEgo}</p>
            <p className="card-text"><small className="text-body-secondary">{characters}</small></p>
            <p className="card-text"><small className="text-body-secondary">{firstAppearance}</small></p>
        </div>
        <Link to={`/hero/${id}`}>Mas...</Link>
    </div>
  )
}
