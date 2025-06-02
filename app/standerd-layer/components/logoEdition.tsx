import { JsonLayerType } from "@/types/standeredLayoutType";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name_store: string;
};

export default function LogoEdition({
  isEditStoreName,
  setIsEditStoreName,
  setJsonLayer,
  jsonLayer,
  name_store,
}: {
  isEditStoreName: boolean;
  setIsEditStoreName: (isEditStoreName: boolean) => void;
  setJsonLayer: (jsonLayer: JsonLayerType | null) => void;
  jsonLayer: JsonLayerType | null;
  name_store: string;
}) {
  const { register, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      name_store: name_store || "",
    },
  });
  useEffect(() => {
    setValue("name_store", name_store);
  }, [name_store]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current && isEditStoreName) {
      ref.current.focus();
    }
  }, [isEditStoreName]);

  // Update jsonLayer when form value changes
  useEffect(() => {
    const subscription = watch((value) => {
      if (jsonLayer && value.name_store) {
        setJsonLayer({
          ...jsonLayer,
          name_store: value.name_store,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, jsonLayer, setJsonLayer]);

  return isEditStoreName ? (
    <input
      {...register("name_store")}
      ref={(e) => {
        ref.current = e;
        register("name_store").ref(e);
      }}
      type="text"
      className="w-full border-none outline-none"
      onBlur={() => setIsEditStoreName(false)}
    />
  ) : (
    <span className="font-semibold text-gray-800 group relative bg-red-500 w-full">
      <i
        onClick={() => setIsEditStoreName(!isEditStoreName)}
        className="ri-pencil-line group-hover:opacity-100 transition-all duration-300 opacity-0 absolute text-xl -top-3 -right-2"
      ></i>
      {watch("name_store")}
    </span>
  );
}
