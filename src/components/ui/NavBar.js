import React, { useContext } from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const NavBar = () => {

  const volverAtras = useNavigate();
  // const {user} = useContext(AuthContext);
  const {user:{name}, dispatch} = useContext(AuthContext); //dole desestructuracion
  const salir = ()=> { 
        dispatch({type:types.logout});
        volverAtras('/login', {replace:true})
        
  }
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <Link className='navbar-brand' to = '/'>Asociaciones</Link>
        <div className='navbar-collapse'>
            <div className='navbar-nav'>
              <NavLink className='nav-item nav-link' to = '/marvel'>Marvel</NavLink>
              <NavLink className='nav-item nav-link' to = '/dc'>DC</NavLink>
              <NavLink className='nav-item nav-link' to = '/search'>Search</NavLink>
            </div>         
        </div>
        <div className='navbar-collapse collpse'>
            <ul className='navbar-nav ml-auto'>
                <span className='nav-item nav-link text-info'>{name}</span>
                <button className='nav-item nav-link btn' onClick={salir}>Logout</button>
            </ul>
        </div>
    </nav>
  )
}
