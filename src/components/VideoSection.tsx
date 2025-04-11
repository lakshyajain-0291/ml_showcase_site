
import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="video">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Project Presentation" 
          subtitle="Watch our presentation explaining the research"
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <Card className="paper-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-gray-900 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-white transition-colors duration-300">
                    <Play className="h-10 w-10 text-theme-blue fill-theme-blue" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="font-medium">IntelliVision: Advanced ML for Computer Vision</h3>
                  <p className="text-sm text-white/80">Presentation at ML Research Conference 2023</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="paper-shadow">
              <CardContent className="p-4">
                <div className="aspect-video w-full bg-gray-900 relative mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Demo video thumbnail"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="font-medium text-sm">Live Demo: Image Retrieval</h4>
                <p className="text-xs text-gray-600">3:24</p>
              </CardContent>
            </Card>
            
            <Card className="paper-shadow">
              <CardContent className="p-4">
                <div className="aspect-video w-full bg-gray-900 relative mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                    alt="Code walkthrough thumbnail"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="font-medium text-sm">Architecture Explained</h4>
                <p className="text-xs text-gray-600">5:12</p>
              </CardContent>
            </Card>
            
            <Card className="paper-shadow">
              <CardContent className="p-4">
                <div className="aspect-video w-full bg-gray-900 relative mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                    alt="Future work thumbnail"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="font-medium text-sm">Future Research Directions</h4>
                <p className="text-xs text-gray-600">4:45</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
