import React, { useEffect, useState } from "react";
import { JsonLayerType } from "@/types/standeredLayoutType";

interface NavSidebarProps {
  item: {
    name: string;
    icon: string;
  };
  register: any;
  jsonLayer: JsonLayerType;
  setJsonLayer: React.Dispatch<React.SetStateAction<JsonLayerType | null>>;
  watch: any;
}

export default function NavSidebar({
  item,
  register,
  jsonLayer,
  setJsonLayer,
  watch,
}: NavSidebarProps) {
  const [isEditStoreName, setIsEditStoreName] = useState(false);
  const [itemName, setItemName] = useState(item.name);

  // Handle input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setItemName(newName);
  };

  // Handle save changes
  const handleSave = () => {
    if (jsonLayer && itemName !== item.name) {
      setJsonLayer({
        ...jsonLayer,
        sidebarSettings: {
          ...jsonLayer.sidebarSettings,
          navigation: jsonLayer.sidebarSettings.navigation.map((nav: any) =>
            nav.name === item.name ? { ...nav, name: itemName } : nav
          ),
        },
      });
    }
    setIsEditStoreName(false);
  };

  return isEditStoreName ? (
    <div className="relative group flex items-center gap-3 p-2 rounded-md hover:bg-blue-100 bg-blue-50 text-blue-600">
      <i
        onClick={() => setIsEditStoreName(true)}
        className="ri-pencil-line cursor-pointer group-hover:opacity-100 transition-all duration-300 opacity-0 absolute text-xl -top-3 -right-2"
      ></i>
      <input
        value={itemName}
        onChange={handleNameChange}
        type="text"
        className="w-full h-6 border border-blue-300 rounded-md p-2 outline-none focus:border-blue-500"
        onBlur={handleSave}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      />
    </div>
  ) : (
    <div className="relative group flex items-center gap-3 p-2 rounded-md hover:bg-blue-100 bg-blue-50 text-blue-600">
      <i
        onClick={() => setIsEditStoreName(true)}
        className="ri-pencil-line cursor-pointer group-hover:opacity-100 transition-all duration-300 opacity-0 absolute text-xl -top-3 -right-2"
      ></i>
      <i className={item.icon}></i>
      <span>{itemName}</span>
    </div>
  );
}
