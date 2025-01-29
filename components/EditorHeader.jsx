import { Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Code } from "lucide-react";
import { Monitor } from "lucide-react";
import { Smartphone } from "lucide-react";

function EditorHeader() {
  return (
    <div className="p-4 shadow-sm flex justify-between">
      <div className="flex items-center">
        <Star className="w-8 h-8 text-yellow-500" />
        <span className="text-2xl font-bold text-yellow-600">Editor</span>
      </div>
      <div>
        <Button variant="ghost"><Monitor/>Desktop</Button>
        <Button variant="ghost"><Smartphone/>Mobile</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="ghost">
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
