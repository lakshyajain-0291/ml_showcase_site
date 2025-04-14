
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-theme-blue/10 to-theme-lightBlue/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">NIDS</span>: Advanced ML for Network Intrusion Detection
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Leveraging advanced classification algorithms and live packet inspection to proactively identify malicious activities on a network.            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-theme-blue hover:bg-theme-darkBlue"  onClick={() => window.location.href = 'https://drive.google.com/file/d/1qLTRAscNorWcRLni7awWf6N4fko7jUcs/view?usp=sharing'}>
                Read Paper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-lightBlue" onClick={() => window.location.href = 'https://youtu.be/LEUYgy50xXA'}>
                View Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-blue to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="AI Vision System" 
                  className="rounded h-auto w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">99.7% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
