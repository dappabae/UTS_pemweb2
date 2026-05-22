import type { ReactNode } from "react";

interface CardProject {
  children: ReactNode; 
  className?: string; 
}

export const Card = ({ children, className = "" }: CardProject) => {
  return (
    <div
      className={`cursor-pointer bg-white shadow-md rounded overflow-hidden border border-gray-300 border-r-6 border-r-black p-6 ${className}`}
    >
      {children}
    </div>
  );
};