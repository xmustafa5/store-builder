import React, { useEffect, useState } from "react";

export default function NavSidebar({
  item,
  register,
  jsonLayer,
  setJsonLayer,
  watch,
}: {
  item: any;
  register: any;
  jsonLayer: any;
  setJsonLayer: any;
  watch: any;
}) {
  const [isEditStoreName, setIsEditStoreName] = useState(false);
  useEffect(() => {
    const subscription = watch((value: any) => {
      if (jsonLayer && value.name_store) {
        setJsonLayer({
          ...jsonLayer,
          sidebarSettings: {
            ...jsonLayer.sidebarSettings,
            navigation: jsonLayer.sidebarSettings.navigation.map((nav: any) =>
              nav.name === item.name ? { ...nav, name: value.name_store } : nav
            ),
          },
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, jsonLayer, setJsonLayer, item.name]);
  return isEditStoreName ? (
    <input
      {...register("name_store")}
      type="text"
      className="w-full border-none outline-none"
      onBlur={() => setIsEditStoreName(false)}
    />
  ) : (
    <div className="relative group flex items-center gap-3 p-2 rounded-md bg-blue-50 text-blue-600">
      <i
        onClick={() => setIsEditStoreName(!isEditStoreName)}
        className="ri-pencil-line group-hover:opacity-100 transition-all duration-300 opacity-0 absolute text-xl -top-3 -right-2"
      ></i>
      <i className={item.icon}></i>
      <span>{item.name}</span>
    </div>
  );
}
