"use client";

import { useRef, useState } from "react";
import type {
  TourPlannerComponentProps,
} from "./types";
import {
  CloudArrowUpIcon,
  PaperAirplaneIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function UploadReference({
  value,
  onChange,
}: TourPlannerComponentProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (selectedFiles: FileList | null) => {
  if (!selectedFiles) return;

  const validFiles = Array.from(selectedFiles).filter(
    (file) => {
      const validType = [
        "image/jpeg",
        "image/png",
        "image/webp",
      ].includes(file.type);

      const validSize = file.size <= 5 * 1024 * 1024;

      return validType && validSize;
    }
  );

  onChange("files", validFiles);
};

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFiles(event.target.files);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    setIsDragging(false);

    handleFiles(event.dataTransfer.files);
  };

  return (
    <section
      id="upload-reference"
      className="rounded-2xl border border-gray-200 my-8 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="upload-reference-title"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-700 text-lg font-bold text-white">
          4
        </span>

        <div>
          <div className="flex items-center gap-2">
            <h2
              id="upload-reference-title"
              className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
            >
              Upload Reference
            </h2>

            <span className="text-base font-normal text-gray-500">
              (Optional)
            </span>
          </div>

          <p className="mt-1 text-base leading-6 text-gray-700">
            Upload images or screenshots of places, tours or styles you like.
          </p>
        </div>
      </div>

      {/* =====================================================
          UPLOAD AREA
      ===================================================== */}
      <div className="mt-6">
        <input
          ref={inputRef}
          id="reference-files"
          name="referenceFiles"
          type="file"
          accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
          onChange={handleInputChange}
        />

        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              event.preventDefault();
              inputRef.current?.click();
            }
          }}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => {
            setIsDragging(false);
          }}
          onDrop={handleDrop}
          className={`flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 text-center transition ${
            isDragging
              ? "border-amber-600 bg-amber-50"
              : "border-gray-300 bg-white hover:border-amber-400 hover:bg-amber-50/30"
          }`}
          aria-label="Upload reference images"
        >
          {/* Upload icon */}
          <CloudArrowUpIcon
            className={`h-16 w-16 ${
              isDragging
                ? "text-amber-700"
                : "text-gray-600"
            }`}
            strokeWidth={1.3}
            aria-hidden="true"
          />

          {/* Main text */}
          <p className="mt-4 text-lg font-semibold text-slate-900">
            Drag &amp; drop your images here
          </p>

          <p className="mt-2 text-base text-gray-600">
            or
          </p>

          {/* Choose files */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              inputRef.current?.click();
            }}
            className="mt-3 inline-flex h-12 items-center justify-center rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
          >
            Choose Files
          </button>

          {/* Selected files */}
          {value.files.length > 0 && (
        <div className="mt-5">
            <p className="text-base font-semibold text-slate-900">
            Selected files:
            </p>

            <ul className="mt-2 space-y-1">
            {value.files.map((file) => (
        <li
          key={`${file.name}-${file.size}`}
          className="text-base text-gray-700"
        >
          {file.name}
        </li>
      ))}
    </ul>
  </div>
)}
        </div>

        {/* Upload note */}
        <p className="mt-4 text-center text-base leading-6 text-gray-600">
          You can upload multiple images (JPG, PNG, WebP - Max 5MB each)
        </p>
      </div>

      {/* =====================================================
          BOTTOM ACTIONS
      ===================================================== */}
      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
        >
          <PaperAirplaneIcon
            className="h-5 w-5"
            aria-hidden="true"
          />

          Send My Tour Plan
        </button>

        {/* Privacy */}
        <div className="flex items-center gap-2 text-base leading-6 text-gray-600">
          <LockClosedIcon
            className="h-5 w-5 shrink-0 text-gray-500"
            aria-hidden="true"
          />

          <span>
            We respect your privacy. Your information is safe with us.
          </span>
        </div>
      </div>
    </section>
  );
}