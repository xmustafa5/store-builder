"use client";
import React, { useState } from "react";
import LogoEdition from "./components/logoEdition";
import { JsonLayerType } from "@/types/standeredLayoutType";

export default function StandardLayout() {
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
  const [jsonLayer, setJsonLayer] = useState<JsonLayerType | null>(
    jsonLayerDefault
  );
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
              jsonLayer={jsonLayer}
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          <div className="flex items-center gap-3 p-2 rounded-md bg-blue-50 text-blue-600">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-50">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span>Products</span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-50">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Orders</span>
          </div>
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
