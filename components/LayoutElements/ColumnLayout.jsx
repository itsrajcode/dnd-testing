"use client";
import { useDragDropElementLayout, useEmailTemplate } from "@/app/provider";
import React, { useState } from "react";
import ButtonComponent from "../Elements/ButtonComponent";
import TextComponent from "../Elements/TextComponent";
function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState(null);
  const { EmailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } =
    useDragDropElementLayout();
  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id,
    });
  };

  const onDropHandle = (event) => {
    event.preventDefault();
    const index = dragOver?.index;
    setEmailTemplate(
      prevItem =>
        prevItem?.map(
          (col) =>
            col.id === layout?.id
              ? {
                  ...col,
                  [index]: dragElementLayout?.dragElement,
                }
              : col
        )
    );
    setDragOver(null);
  };
  const getElementComponent = (element) => {
    if (element?.type == "Button") {
      return <ButtonComponent {...element} />;
    }
    else if (element?.type == "Text") {
      return <TextComponent {...element} />;
    }

      return element?.type;
    
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfColumns}, 1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout?.numOfColumns }).map((_, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-2 flex items-center border border-dashed justify-center
                ${
                  index == dragOver?.index &&
                  dragOver?.columnId &&
                  "bg-green-100"
                }`}
            onDragOver={(event) => onDragOverHandle(event, index)}
            onDrop={onDropHandle}
          >
            {getElementComponent(layout?.[index]) ?? <h1>Add element here</h1>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnLayout;

