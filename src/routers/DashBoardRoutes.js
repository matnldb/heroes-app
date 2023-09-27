import React from 'react'
import { NavBar } from '../components/ui/NavBar'

import { Route, Routes } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { Dscreen } from '../components/dc/Dscreen'
import { SearchScreen } from '../components/search/SearchScreen'


export const DashBoardRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className='container mt-2'>
        <Routes>
          <Route path="/marvel" element={<MarvelScreen/>} />
          <Route path="/dc" element={<Dscreen/>} />
          <Route path="/search" element={<SearchScreen/>} />
          <Route path="/hero/:id" element={<HeroeScreen/>} />           
        </Routes>
        </div>
    </>
  )
}
