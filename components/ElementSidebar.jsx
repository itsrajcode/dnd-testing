import Layout from "@/Data/Layout";
import React from "react";
import ElementCard from "./ElementCard";
import Element from "@/Data/Element";

function ElementSidebar() {
  return (
    <div className="p-4 h-screen shadow-sm">
      <h2 className="text-lg font-bold">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Layout.map((item, index) => (
          <ElementCard item={item} index={index} />
        ))}
      </div>

      <h2 className="text-lg font-bold">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Element.map((item, index) => (
          <ElementCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ElementSidebar;
