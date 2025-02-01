"use client";
import { DragDropLayoutElement } from "@/context/DragDropLayoutElement";
import React, { useContext, useState } from "react";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";

export function ScreenSizeProvider({ children }) {
  const [screenSize, setScreenSize] = useState("desktop");

  const [dragElementLayout, setDragElementLayout] = useState();
  const [EmailTemplate, setEmailTemplate] = useState([]);

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
      <DragDropLayoutElement.Provider
        value={{ dragElementLayout, setDragElementLayout }}
      >
        <EmailTemplateContext.Provider
          value={{ EmailTemplate, setEmailTemplate }}
        >
          {children}
        </EmailTemplateContext.Provider>
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
    throw new Error(
      "useDragDropElementLayout must be used within a DragDropLayoutElementProvider"
    );
  }
  return context;
}

export function useEmailTemplate() {
  const context = useContext(EmailTemplateContext);
  if (context === undefined) {
    throw new Error(
      "useEmailTemplate must be used within a EmailTemplateProvider"
    );
  }
  return context;
}
