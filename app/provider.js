"use client"
import React, { createContext, useContext, useState } from 'react';

const ScreenSizeContext = createContext();

export function ScreenSizeProvider({ children }) {
  const [screenSize, setScreenSize] = useState('desktop');

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export function useScreenSize() {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }
  return context;
}
