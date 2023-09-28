import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRout = () => {
    const {user:{logged}} = useContext(AuthContext)
    const urlActual = useLocation();
    localStorage.setItem('lastUrl',urlActual.pathname)
    
  return (
    logged?<Outlet/>:<Navigate to = '/login'/>
  )
}
