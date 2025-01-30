"use client";
import { useScreenSize } from "@/app/provider";
import React from "react";
import { useDragDropElementLayout } from "@/app/provider";

function Canvas() {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragDropElementLayout();
  const onDragOver = (e) => {
    e.preventDefault();
    console.log("dragging");
  };
  const onDropHandler = (e) => {
    e.preventDefault();
    console.log(dragElementLayout);
  };
  return (
    <div className="mt-20 flex justify-center">
      <div
        className={`bg-white p-6 w-full max-w-2xl ${
          screenSize === "desktop" ? "max-w-2xl" : "max-w-md"
        }`}
        onDragOver={onDragOver}
        onDrop={onDropHandler}
      >

      </div>
    </div>
  );
}

export default Canvas;

