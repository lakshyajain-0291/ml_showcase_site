
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
              We present NIDS, a novel machine learning-based approach to <span className="highlight">real-time network intrusion detection</span> that leverages a diverse range of classification models for accurate and efficient threat identification. Traditional NIDS implementations often depend on static rules or limited feature engineering, making them less adaptable to evolving cyber threats and prone to high false-positive rates.            
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our framework systematically evaluates several machine learning algorithms—including <span className="highlight">Logistic Regression, Nearest Centroid Classifier, Naive Bayes, Decision Tree, Random Forest, Linear Discriminant Analysis (LDA), Single-Layer Perceptron (SLP), and Multi-Layer Perceptron (MLP)</span>—on a benchmark dataset to determine the optimal model for deployment.  Each algorithm was trained and assessed using performance metrics such as 
              <span className="highlight"> confusion matrix, precision-recall curve, ROC curve, and detailed classification reports </span> enabling an objective comparison across both classical and neural-based architectures.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              The best-performing model is serialized and integrated into a lightweight backend system that captures <span className="highlight">live packet</span> data directly from a computer network, processes it in real time, and <span className="highlight">predicts potential intrusions</span> with minimal delay. This end-to-end pipeline bridges the gap between experimental ML models and real-world intrusion detection applications.
            </p>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {["Network Security", "Intrusion Detection System", "Machine Learning", "Real-Time Monitoring", "Cybersecurity"].map((keyword, index) => (
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
