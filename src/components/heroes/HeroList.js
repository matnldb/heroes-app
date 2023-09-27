import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

 const heroes = useMemo(()=>getHeroByPublisher(publisher),[publisher]) ;
 //utilizo useMemo para memorizar la respuesta de un proceso pesado, cada vez que cambian las dependencias en esete caso el pub
  return (
    <>
        <div className='card-group d-flex animate__animated animate__fadeIn'>
            {
                heroes.map(hero =>(
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div>
    </>
  )
}
