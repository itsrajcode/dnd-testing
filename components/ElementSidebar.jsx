"use client";
import Layout from "@/Data/Layout";
import React from "react";
import ElementCard from "./ElementCard";
import Element from "@/Data/Element";
import { useDragDropElementLayout } from "@/app/provider";

function ElementSidebar() {
  const { dragElementLayout, setDragElementLayout } =
    useDragDropElementLayout();
  const onDragLayoutStart = (layout) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };
  const onDragElementStart = (element) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: Date.now(),
      },
    });
  };
  return (
    <div className="p-4 h-screen shadow-sm">
      <h2 className="text-lg font-bold">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Layout.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => onDragLayoutStart(item)}
          >
            <ElementCard item={item} />
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Element.map((element, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => onDragElementStart(element)}
          >
            <ElementCard item={element} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ElementSidebar;
