import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroeScreen = () => {
  const {id} = useParams(); //lee el parametro, y se desestructura
  const heroe =useMemo(()=>getHeroById(id),[id]) ;
  const historial = useNavigate();  
  
  if(!heroe){return <Navigate to='/'/>} //regresa si se escriba un url incorrecto(un id de un heroe inexistente )
  
  const {      
        superhero,
        publisher,
        alterEgo,
        firstAppearance,
        characters, } = heroe;

  
  const vuelveAtras = ()=>{  historial(-1) } 
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`../assets/heroes/${id}.jpg`} className='img-thumbnail animate__animated animate__headShake' alt={superhero}/>
      </div>  
      <div className='col-8'>
        <h1>{superhero}</h1>
        <ul className='list-group list group flush'>
          <li className='list-group-item'><b>Alter ego: </b>{alterEgo}</li>
          <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
          <li className='list-group-item'><b>First Appearance: </b>{firstAppearance}</li>
        </ul>
        <h5>Characters</h5>
        <p className='mt-2'>{characters}</p>
        <button className='btn btn-outline-info' onClick={vuelveAtras}>Regresar</button>
      </div>      
    </div>
  )
}
