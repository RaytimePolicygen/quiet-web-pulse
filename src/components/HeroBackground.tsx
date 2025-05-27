import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Using inline CSS for the background image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.5)), url('https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
          filter: "brightness(0.9)"
        }}
      ></div>
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-[#1e293b]/30"></div>
    </div>
  );
};

export default HeroBackground;
