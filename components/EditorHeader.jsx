import { Star } from "lucide-react";
import React from "react";

function EditorHeader() {
  return (
    <div className="p-4 shadow-sm">
      <div className="flex items-center">
        <Star className="w-8 h-8 text-yellow-500" />
        <span className="text-2xl font-bold text-yellow-600">Editor</span>
      </div>
    </div>
  );
}

export default EditorHeader;
