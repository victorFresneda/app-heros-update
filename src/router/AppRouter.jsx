import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HerosRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <>
      
        <Routes>
           

            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={

              <PrivateRoute>
                  <HerosRoutes />
              </PrivateRoute>

            }/>

            

        </Routes>
    </>
  )
}
