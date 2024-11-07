import React, { ReactNode } from 'react';

interface GradientProps {
  children: ReactNode;
}

const Gradient: React.FC<GradientProps> = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#613AE8] to-[#DC2626] inline-block">
      {children}
    </span>
  );
};

export default Gradient;
