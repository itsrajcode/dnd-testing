"use client";
import { ScreenSizeContext } from '@/context/ScreenSizeContext';
import React, { useContext, useState } from 'react'

function provider({children}) {
    const [screenSize, setScreenSize] = useState('desktop');
  return (
    <ScreenSizeContext.Provider value={{screenSize, setScreenSize}}>
        {children}
    </ScreenSizeContext.Provider>
  )
}

export default provider;

export const useScreenSize = () => {
   return useContext(ScreenSizeContext);
}