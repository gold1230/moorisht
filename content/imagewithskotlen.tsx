"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  title?:string;
  priority?:boolean;
  className?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  fill,
  width,
  height,
  title,
  priority,
  className,
}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        title={title}
        priority={priority}
        onLoad={() => setLoading(false)}
        className={`${className} ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />
    </div>
  );
}