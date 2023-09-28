import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoute = () => {
  
    const {user:{logged}} = useContext(AuthContext)
    return (
      logged?<Navigate to = '/'/>:<Outlet/>
    ) 
}


