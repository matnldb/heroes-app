import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRout } from './PrivateRout';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div >
        <Routes>           
          <Route element={<PrivateRout/>}>
            <Route path="/*" element={<DashBoardRoutes/>} />          
          </Route>  
          <Route element={<PublicRoute/>}>
            <Route path="/login" element={<LoginScreen/>} />          
          </Route>  
        </Routes>
        </div>
    </BrowserRouter>
  );
};
