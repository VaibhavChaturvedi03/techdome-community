const Logo = ({ size = "md", showText = true, imageUrl = "/logo.png" }: { size?: "sm" | "md" | "lg"; showText?: boolean; imageUrl?: string }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizeClasses[size]} rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
        <img 
          src={imageUrl} 
          alt="TechDome Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      
    </div>
  );
};

export default Logo;
