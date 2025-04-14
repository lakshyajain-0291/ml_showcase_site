
import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const ProblemStatementSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="problem-statement">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="The Problem Statement" 
          subtitle="Challenges in Modern Network Intrusion Detection Systems"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in">
            <Card className="paper-shadow h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-theme-blue">Limitations of Current Approaches</h3>
                <p className="text-gray-700 mb-4">
                  Despite significant advancements in machine learning and cybersecurity, network intrusion detection systems (NIDS) still face several critical challenges:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">Adapting to Evolving Threats</span>: Traditional rule-based systems struggle to detect new, unseen attack vectors, leading to high false-negative rates in the face of emerging threats.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">False Positives</span>: Many existing systems are prone to high false-positive rates, making it difficult for security analysts to effectively respond to real threats without being overwhelmed by alerts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium"> Scalability</span>: Achieving fast and accurate predictions for network anomalies in real-time, while balancing high computational efficiency, is difficult in live network environments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">●</span>
                    <span><span className="font-medium">Real-Time Analysis</span>: High computational demands making real-time retrieval challenging for large-scale databases.</span>
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
                      <span className="bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded-full">Intrusion Detection Challenge</span>
                      <h4 className="text-white text-xl mt-2">Distinguishing statistically similar but behaviorally different network traffic</h4>
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
                How can we design a machine learning-based intrusion detection system that accurately identifies complex network threats in real time, while maintaining scalability and minimizing false positives for deployment in practical environments?              
              </p>
              
              <div className="p-4 rounded-lg">
                <h4 className="font-medium text-theme-darkBlue mb-2">Key Research Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">1.</span>
                    <span>Compare multiple classical ML models for intrusion detection to identify the most effective approach.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">2.</span>
                    <span>Integrate the best-performing model into a real-time packet monitoring system for live traffic analysis.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">3.</span>
                    <span>Use evaluation tools such as confusion matrices, ROC and precision-recall curves, and classification reports to ensure robustness and reliability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-blue mr-2">4.</span>
                    <span>Assess system performance across varying network conditions to validate generalizability and readiness for real-world deployment.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="paper-shadow">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Models Accuracy</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Logistic Regression</span>
                    <span className="text-sm font-medium text-theme-blue">94.19%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "94.19%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Nearest Centroid Classifier</span>
                    <span className="text-sm font-medium text-theme-blue">84.57%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "84.57%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Decision Tree</span>
                    <span className="text-sm font-medium text-theme-blue">96.79%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "96.79%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Random Forest</span>
                    <span className="text-sm font-medium text-theme-blue">97.75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "97.75%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">LDA</span>
                    <span className="text-sm font-medium text-theme-blue">93.32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "93.32%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Naive Bayes</span>
                    <span className="text-sm font-medium text-theme-blue">90.45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "90.45%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Single Layer Perceptron</span>
                    <span className="text-sm font-medium text-theme-blue">89.00%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "89.00%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Multiple Layer Perceptron</span>
                    <span className="text-sm font-medium text-theme-blue">99.69%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-theme-blue h-2 rounded-full" style={{ width: "99.69%" }}></div>
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
