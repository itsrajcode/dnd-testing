"use client"
import { Star, Code, Monitor, Smartphone } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useScreenSize } from "@/app/provider";

function EditorHeader() {
  const { screenSize, setScreenSize } = useScreenSize();

  return (
    <div className="p-4 shadow-sm flex justify-between">
      <div className="flex items-center gap-2">
        <Star className="w-8 h-8 text-yellow-500" />
        <span className="text-2xl font-bold text-yellow-600">Editor</span>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          className={screenSize === "desktop" ? "bg-blue-500 text-white" : ""}
          onClick={() => setScreenSize("desktop")}
        >
          <Monitor className="mr-2" />
          Desktop
        </Button>
        <Button
          variant="ghost"
          className={screenSize === "mobile" ? "bg-blue-500 text-white" : ""}
          onClick={() => setScreenSize("mobile")}
        >
          <Smartphone className="mr-2" />
          Mobile
        </Button>
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