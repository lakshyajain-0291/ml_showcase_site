
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = "left" 
}) => {
  const alignmentClass = alignment === "center" ? "text-center mx-auto" : "";
  const underlineClass = alignment === "center" ? "left-1/4 right-1/4 w-1/2" : "left-0 w-2/3";

  return (
    <div className={`mb-8 ${alignmentClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold relative pb-2 inline-block text-gray-900 dark:text-white ${alignmentClass}`}>
        {title}
        <span className={`absolute bottom-0 h-1 bg-theme-blue ${underlineClass}`}></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
