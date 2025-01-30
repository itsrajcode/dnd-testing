"use client";
import { DragDropLayoutElement } from "@/context/DragDropLayoutElement";
import React, { createContext, useContext, useState } from "react";

const ScreenSizeContext = createContext();

export function ScreenSizeProvider({ children }) {
  const [screenSize, setScreenSize] = useState("desktop");

  const [dragElementLayout, setDragElementLayout] = useState();

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
      <DragDropLayoutElement.Provider value={{dragElementLayout, setDragElementLayout}}>
        {children}
      </DragDropLayoutElement.Provider>
    </ScreenSizeContext.Provider>
  );
}

export function useScreenSize() {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
}

export function useDragDropElementLayout() {
  const context = useContext(DragDropLayoutElement);
  if (context === undefined) {
    throw new Error("useDragDropElementLayout must be used within a DragDropLayoutElementProvider");
  }
  return context;
}
