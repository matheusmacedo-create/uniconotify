"use client";
import React from "react";

export function ConnectionCard({
  title,
  description,
  onConfigure,
}: {
  title: string;
  description: string;
  onConfigure: () => void;
}) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <button
        onClick={onConfigure}
        className="mt-3 inline-flex items-center px-4 py-2 rounded-lg border bg-gray-50 hover:bg-gray-100"
      >
        Configurar
      </button>
    </div>
  );
}
