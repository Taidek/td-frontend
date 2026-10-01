import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-[2px] bg-surface-2 p-6 shadow-[0_8px_25px_rgba(0,0,0,0.35)] ${className}`}
      {...props}
    />
  );
}
