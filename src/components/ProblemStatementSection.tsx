
import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const ProblemStatementSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="problem-statement">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="The Problem Statement" 
          subtitle="Challenges in modern image retrieval systems"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in">
            <Card className="paper-shadow h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-theme-blue">Limitations of Current Approaches</h3>
                <p className="text-gray-700 mb-4">
                  Despite significant advances in computer vision and machine learning, content-based image retrieval systems continue to face several key challenges:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">Semantic Gap</span>: Difficulty in bridging the gap between low-level visual features and high-level semantic concepts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">Context Awareness</span>: Limited ability to understand contextual relationships between objects in complex scenes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">Cross-Domain Retrieval</span>: Poor performance when searching across varied visual domains with different characteristics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">Computational Efficiency</span>: High computational demands making real-time retrieval challenging for large-scale databases.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <Card className="paper-shadow overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Image retrieval challenge visualization" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded-full">Image Retrieval Challenge</span>
                      <h4 className="text-white text-xl mt-2">Distinguishing visually similar but semantically different content</h4>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
          <Card className="paper-shadow col-span-1 lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Our Research Question</h3>
              <p className="text-gray-700 mb-6">
                How can we develop a content-based image retrieval system that effectively bridges the semantic gap between low-level visual features and high-level semantic concepts while maintaining computational efficiency suitable for real-world applications?
              </p>
              
              <div className="bg-theme-lightBlue p-4 rounded-lg border border-theme-blue/20">
                <h4 className="font-medium text-theme-darkBlue mb-2">Key Research Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">1.</span>
                    <span>Develop a transformer-based feature extraction model optimized for image retrieval tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">2.</span>
                    <span>Design a hierarchical attention mechanism to focus on salient image regions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">3.</span>
                    <span>Create an efficient indexing structure for fast retrieval from large-scale databases.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">4.</span>
                    <span>Evaluate performance across diverse datasets and real-world scenarios.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="paper-shadow">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Metrics of Success</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Precision@10</span>
                    <span className="text-sm font-medium text-theme-blue">92.3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "92.3%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mean Average Precision</span>
                    <span className="text-sm font-medium text-theme-blue">87.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "87.5%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Recall@100</span>
                    <span className="text-sm font-medium text-theme-blue">95.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "95.8%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Retrieval Speed</span>
                    <span className="text-sm font-medium text-theme-blue">45ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
