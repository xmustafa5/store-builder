"use client";
import React, { useEffect, useState } from "react";
import LogoEdition from "./components/logoEdition";
import { JsonLayerType } from "@/types/standeredLayoutType";
import { useForm } from "react-hook-form";
import NavSidebar from "./components/NavSidebar";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function StandardLayout() {
  const { data } = useQuery({
    queryKey: ["jsonLayer"],
    queryFn: async () => {
      const res = await axios.get(
        "http://192.168.0.190:8000/3dd1c4a1-272f-46b0-a5fb-384bb8281993"
      );
      return res.data.data ? JSON.parse(res.data.data) : jsonLayerDefault;
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (dataJson: JsonLayerType) => {
      const res = await axios.patch(
        "http://192.168.0.190:8000/3dd1c4a1-272f-46b0-a5fb-384bb8281993",
        {
          data: JSON.stringify(dataJson),
        }
      );
      return res.data;
    },
  });

  const jsonLayerDefault: JsonLayerType = {
    name_store: "fdsafja",
    sidebarSettings: {
      style: {
        color: "#red",
      },
      navigation: [
        {
          name: "Dashboard",
          icon: "ri-dashboard-line",
          href: "/dashboard",
        },
        {
          name: "Products",
          icon: "ri-product-hunt-line",
          href: "/products",
        },
        {
          name: "Orders",
          icon: "ri-shopping-cart-line",
          href: "/orders",
        },
      ],
    },
  };
  const { register, watch } = useForm({
    defaultValues: jsonLayerDefault,
  });
  const [jsonLayer, setJsonLayer] = useState<JsonLayerType | null>(
    jsonLayerDefault
  );

  useEffect(() => {
    if (jsonLayer) {
      const timeoutId = setTimeout(() => {
        mutate(jsonLayer);
      }, 500); // Debounce for 500ms

      return () => clearTimeout(timeoutId);
    }
  }, [jsonLayer, mutate]);
  console.log(data?.name_store);
  const [isEditStoreName, setIsEditStoreName] = useState(false);
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        {/* Logo area */}
        <div className="p-4 border-b border-gray-200">
          <div className="h-8 flex items-center gap-2">
            <div className="w-8 h-8 shrink-0 bg-blue-600 rounded-md"></div>
            <LogoEdition
              isEditStoreName={isEditStoreName}
              setIsEditStoreName={setIsEditStoreName}
              setJsonLayer={setJsonLayer}
              jsonLayer={data}
              name_store={data?.name_store}
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          {data?.sidebarSettings?.navigation?.map((item) => (
            <NavSidebar
              key={item.name}
              item={item}
              register={register}
              jsonLayer={jsonLayer}
              setJsonLayer={setJsonLayer}
              watch={watch}
            />
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-3.5">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Content will be injected here */}
          </div>
        </main>
      </div>
    </div>
  );
}
