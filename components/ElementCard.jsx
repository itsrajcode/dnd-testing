import React from "react";

function ElementCard({ item}) {
  return (
    <div className="mb-4">
      <div className="flex flex-col border border-dashed p-2 rounded-xl items-center gap-2 group cursor-grab hover:shadow-md hover:border-blue-500">
        <item.icon className="w-5 h-5" />
        <span>{item.label}</span>
      </div>
    </div>
  );
}

export default ElementCard;
