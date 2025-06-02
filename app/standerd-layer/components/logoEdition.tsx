import { JsonLayerType } from "@/types/standeredLayoutType";
import React, { useEffect, useRef } from "react";

export default function LogoEdition({
  isEditStoreName,
  setIsEditStoreName,
  setJsonLayer,
  jsonLayer,
}: {
  isEditStoreName: boolean;
  setIsEditStoreName: (isEditStoreName: boolean) => void;
  setJsonLayer: (jsonLayer: JsonLayerType | null) => void;
  jsonLayer: JsonLayerType | null;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [isEditStoreName]);
  return isEditStoreName ? (
    <input
      ref={ref}
      type="text"
      className="w-full border-none outline-none"
      value={jsonLayer?.name_store}
      onBlur={() => setIsEditStoreName(false)}
      onChange={(e) =>
        setJsonLayer(
          jsonLayer
            ? {
                ...jsonLayer,
                name_store: e.target.value,
              }
            : null
        )
      }
    />
  ) : (
    <span className="font-semibold text-gray-800 group relative bg-red-500 w-full">
      <i
        onClick={() => setIsEditStoreName(!isEditStoreName)}
        className="ri-pencil-line group-hover:opacity-100 transition-all duration-300 opacity-0 absolute text-xl -top-3 -right-2"
      ></i>
      {jsonLayer?.name_store}
    </span>
  );
}
