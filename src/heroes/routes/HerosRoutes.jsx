


import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import {DcPage, HeroPage, MarvelPage, SearchPage,} from '../pages'

export const HerosRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/marvel"/>} />
            </Routes>
    
        </div>

        
    </>
  )
}
