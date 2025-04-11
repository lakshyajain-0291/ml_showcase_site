
import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const AbstractSection = () => {
  return (
    <section className="py-16 bg-white" id="abstract">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Abstract" 
          subtitle="Our research at a glance"
        />
        
        <Card className="paper-shadow">
          <CardContent className="p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              We present IntelliVision, a novel approach to content-based image retrieval that leverages state-of-the-art transformer models for visual feature extraction. Traditional image retrieval systems have relied on hand-crafted features or convolutional neural networks, but these methods often struggle with semantic understanding and contextual relationships within images.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Our framework employs a <span className="highlight">vision transformer architecture</span> that processes images as sequences of patches, allowing it to capture both local and global dependencies. We introduce a hierarchical attention mechanism that enables the model to focus on salient regions while maintaining awareness of the overall image composition. This approach significantly improves retrieval accuracy for complex queries involving multiple objects and spatial relationships.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Experimental results on benchmark datasets demonstrate that our method achieves <span className="highlight">state-of-the-art performance</span>, outperforming previous approaches by an average of 12.3% on precision-at-k metrics. Additionally, our model exhibits stronger generalization capabilities across domains and robust performance in zero-shot scenarios, highlighting its potential for real-world applications where labeled data may be limited.
            </p>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {["Computer Vision", "Image Retrieval", "Transformer Models", "Deep Learning", "Feature Extraction"].map((keyword, index) => (
                  <span key={index} className="text-sm bg-theme-lightBlue text-theme-blue px-3 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AbstractSection;
