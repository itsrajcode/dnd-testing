"use client";
import { useEmailTemplate, useScreenSize } from "@/app/provider";
import React, { useState } from "react";
import { useDragDropElementLayout } from "@/app/provider";
import ColumnLayout from "./LayoutElements/ColumnLayout";

function Canvas() {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragDropElementLayout();
  const {EmailTemplate, setEmailTemplate} = useEmailTemplate();
  const [dragHover, setDragHover] = useState(false);
  const onDragOver = (e) => {
    e.preventDefault();
    setDragHover(true);
    console.log("dragging");
  };
  const onDropHandler = (e) => {
    setDragHover(false);
    console.log(dragElementLayout);
    if(dragElementLayout.dragLayout){
      setEmailTemplate([...EmailTemplate, dragElementLayout.dragLayout])
    }
  };
  const getLayoutComponent = (layout) => {
    if(layout.type == 'column'){
      return <ColumnLayout layout={layout} />
    }
    
  }
  return (
    <div className="mt-20 flex justify-center">
      <div
        className={`bg-white p-6 w-full max-w-2xl ${
          screenSize === "desktop" ? "max-w-2xl" : "max-w-md"
        } ${dragHover ? "bg-purple-200 p-4" : ""}`}
        onDragOver={onDragOver}
        onDrop={onDropHandler}
      >
        {EmailTemplate.length > 0 ? EmailTemplate.map((item, index) => (
          <div key={index}>
            {getLayoutComponent(item)}
          </div>
        )):
        <h2 className="p-4 text-center bg-gray-100 border border-dashed">Add Layout Here</h2> }
      </div>
    </div>
  );
}

export default Canvas;

