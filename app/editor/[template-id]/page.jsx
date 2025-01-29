import Canvas from "@/components/Canvas";
import EditorHeader from "@/components/EditorHeader";
import ElementSidebar from "@/components/ElementSidebar";
import Settings from "@/components/Settings";
import React from "react";

function Editor() {
  return (
    <div>
      <EditorHeader />
      <div className="grid grid-cols-5">
        <ElementSidebar />
        <div className="col-span-3 bg-gray-100">
          <Canvas />
        </div>
        <div className="col-span-1">
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Editor;
