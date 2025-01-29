import Layout from "@/Data/Layout";
import React from "react";

function ElementSidebar() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Layouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Layout.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col border border-dashed p-2 rounded-xl items-center gap-2 group cursor-grab hover:shadow-md hover:border-blue-500">
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElementSidebar;
