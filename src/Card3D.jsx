import React, { useState } from 'react';

const Card3D = ({ children, className = '', hover = true, onClick, isSelected = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-300 transform-gpu ${hover ? 'cursor-pointer' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered && hover ? 'translateY(-8px) rotateX(2deg)' : 'translateY(0px)',
        boxShadow: isHovered && hover
          ? '0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(59,130,246,0.1)'
          : '0 4px 8px rgba(0,0,0,0.1)',
        filter: isSelected ? 'drop-shadow(0 0 10px rgba(59,130,246,0.5))' : 'none'
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-xl opacity-0 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};

export default Card3D;

