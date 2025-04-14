import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = "https://www.youtube.com/embed/LEUYgy50xXA"; // Replace with actual video ID

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
                {isPlaying ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={youtubeUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 flex items-center justify-center z-10"
                      onClick={() => setIsPlaying(true)}
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-white transition-colors duration-300">
                        <Play className="h-10 w-10 text-theme-blue fill-theme-blue" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-10">
                      <h3 className="font-medium">
                        NIDS: Advanced ML for Network Intrusion Detection
                      </h3>
                      <p className="text-sm text-white/80">Presentation</p>
                    </div>

                    <img
                      src="../../photos/thumbnail.jpg"
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
