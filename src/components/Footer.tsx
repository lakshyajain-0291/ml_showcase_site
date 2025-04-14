
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-theme-darkBlue py-12 border-t border-gray-200 dark:border-theme-lightBlue/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">NIDS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Driving advanced cybersecurity innovation using machine learning techniques for intelligent network traffic analysis and real-time threat detection.            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Aradhya2708/nids" className="text-gray-500 dark:text-gray-400 hover:text-theme-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-theme-blue">Home</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 dark:text-gray-300 hover:text-theme-blue">Team</Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-600 dark:text-gray-300 hover:text-theme-blue">Our work</Link>
              </li>
              <li>
                <a href="https://www.kaggle.com/datasets/divyansh1010/kdd-nids/data" className="text-gray-600 dark:text-gray-300 hover:text-theme-blue">Dataset</a>
              </li>
              <li>
                <a href="https://github.com/Aradhya2708/nids" className="text-gray-600 dark:text-gray-300 hover:text-theme-blue">Code Repository</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Any of the members Linkedin</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Commits on github</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} NIDS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
