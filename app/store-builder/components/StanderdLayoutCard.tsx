import React from "react";

export default function StandardLayout() {
  return (
    <div className="w-[500px] h-[500px] overflow-hidden bg-white border border-gray-200 shadow-md rounded-md flex">
      {/* Sidebar */}
      <div className="bg-gray-50 w-[140px] border-r border-gray-200">
        <Logo />
        {/* Navigation menu */}
        <div className="p-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-md bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100">
            <svg
              className="w-4 h-4"
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
            <span className="text-sm">Home</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100">
            <svg
              className="w-4 h-4"
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
            <span className="text-sm">Products</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100">
            <svg
              className="w-4 h-4"
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
            <span className="text-sm">Orders</span>
          </div>
        </div>
      </div>
      <HomeContent />
    </div>
  );
}
const Logo = () => {
  return (
    <div className="bg-white p-3 border-b border-gray-200 flex justify-center">
      <div className="w-8 h-8 bg-gray-200 rounded-md" />
    </div>
  );
};
const HomeContent = () => {
  return (
    <div className="flex-1 bg-gray-50">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <div className="w-32 h-4 bg-gray-300 rounded mb-2" />
            <div className="w-48 h-3 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="p-4">
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                <div className="w-8 h-8 rounded-md bg-gray-200" />
              </div>
              <div className="w-16 h-3 bg-gray-200 rounded mt-2" />
            </div>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="mb-4">
          <div className="w-32 h-4 bg-gray-300 rounded mb-3" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-2"
            >
              <div className="w-full h-24 bg-gray-100 rounded-md mb-2" />
              <div className="w-2/3 h-3 bg-gray-200 rounded mb-1" />
              <div className="w-1/2 h-3 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
