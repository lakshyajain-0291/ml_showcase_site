
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-theme-blue font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-theme-blue";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-theme-darkBlue border-b border-gray-200 dark:border-theme-lightBlue/30 shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <div className="bg-theme-blue text-white p-2 rounded-md mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit">
                <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/>
                <path d="M16 8V5c0-1.1.9-2 2-2"/>
                <path d="M12 13h4"/>
                <path d="M12 18h6a2 2 0 0 1 2 2v1"/>
                <path d="M12 8h8"/>
                <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">NIDS</span>
          </Link>
          <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-theme-lightBlue text-xs rounded-md font-semibold text-blue-700 dark:text-blue-300">PRML Project</span>
        </div>

        <nav className="flex items-center space-x-6 text-sm">
          <Link to="/" className={`${isActive("/")} transition-colors duration-200`}>
            Home
          </Link>
          <Link to="/team" className={`${isActive("/team")} transition-colors duration-200`}>
            Team
          </Link>
          <Link to="/publications" className={`${isActive("/publications")} transition-colors duration-200`}>
            Our Work
          </Link>
          <a 
            href="https://github.com/Aradhya2708/nids" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-theme-blue transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
