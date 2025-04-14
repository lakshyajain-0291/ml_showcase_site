
import React from "react";
import SectionTitle from "./SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const MethodologySection = () => {
  return (
    <section className="py-16 bg-white" id="methodology">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Methodology" 
          subtitle="Our novel approach to content-based image retrieval"
        />
        
        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="training">Training Process</TabsTrigger>
            <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="architecture" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="paper-shadow col-span-1 lg:col-span-2">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">Model Architecture</h3>
                  <p className="text-gray-700 mb-6">
                    Our intrusion detection framework employs a layered model evaluation strategy, aligning statistical and neural classifiers for robust threat recognition across diverse network scenarios.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Modular Pipeline Design</h4>
                    <p className="text-gray-700 mb-3">
                    The architecture is modular, consisting of:
                    </p>
                    <ul className="space-y-2 text-gray-700 pl-5">
                      <li className="list-disc">Data Ingestion Module – Captures live or batch network packets.</li>
                      <li className="list-disc">Feature Engineering Block – Extracts relevant attributes such as protocol types, byte counts, connection flags, etc.</li>
                      <li className="list-disc">Model Integration Engine – Seamlessly incorporates the top-performing model for real-time intrusion detection and classification.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Dataset Refinement and Contribution</h4>
                    <p className="text-gray-700 mb-3">
                      The dataset provided initially had discrepancies between the train and test sets, which impacted the model's generalizability. To address this, we combined both the training and testing data, re-uploaded it to Kaggle for broader accessibility, and subsequently split it into proper training, validation, and test sets. This step ensured more consistent model evaluation and provided a balanced dataset for future researchers.                    
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Evaluated Models</h4>
                    <p className="text-gray-700 mb-3">
                      We experimented with a diverse set of machine learning algorithms, including linear models, probabilistic classifiers, decision-based methods, and neural networks. This included Logistic Regression, Nearest Centroid Classifier, Naive Bayes, Decision Tree, Random Forest, Linear Discriminant Analysis (LDA), Single Layer Perceptron, and Multi-Layer Perceptron. Each model was rigorously evaluated using standard performance metrics, and the best-performing one was deployed in the final intrusion detection pipeline for real-time prediction.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Final Deployment</h4>
                    <p className="text-gray-700">
                      The highest-performing model was encapsulated as a .pkl artifact and integrated into the live monitoring layer, enabling real-time prediction over active network traffic streams.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">Feature Extraction</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Statistical Feature Selection</h4>
                      <p className="text-sm text-gray-700">
                        We computed a correlation matrix between all features and the target labels. Features with a correlation coefficient above 0.3 were selected for model training, ensuring relevance and reducing dimensionality.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Refined Input Representation</h4>
                      <p className="text-sm text-gray-700">
                        By focusing on strongly correlated attributes, we enhanced the signal-to-noise ratio in the data, resulting in improved model interpretability and performance.                      
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Lightweight and Scalable</h4>
                      <p className="text-sm text-gray-700">
                      This approach avoids complex embeddings and heavy preprocessing, making it suitable for real-time applications with limited computational resources.
                      </p>
                    </div>
                    
                    <div className="relative mt-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-theme-blue to-purple-600 rounded-lg blur opacity-10"></div>
                      <div className="code-block relative">
                        <pre>
{`# Feature extraction pseudocode
def extract_relevant_features(dataframe, target_column):
    # Compute correlation matrix
    correlation_matrix = dataframe.corr()
    
    # Get absolute correlations with the target
    target_correlation = correlation_matrix[target_column].abs()
    
    # Select features with correlation > 0.3
    selected_features = target_correlation[target_correlation > 0.3].index.tolist()
    
    # Drop the target column if included
    selected_features = [feat for feat in selected_features if feat != target_column]
    
    return dataframe[selected_features]
`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">Training Protocol</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Dataset Preparation</h4>
                      <ul className="space-y-1 text-gray-700 pl-5 mt-2">
                        <li className="list-disc">Merged the train and test splits to ensure uniformity.</li>
                        <li className="list-disc">Uploaded the merged version on Kaggle for broader accessibility.</li>
                        <li className="list-disc">Re-split the data into training, validation, and test sets to ensure reliable evaluation.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Training Environment</h4>
                      <ul className="space-y-1 text-gray-700 pl-5 mt-2">
                        <li className="list-disc">All training was performed using Google Colab.</li>
                        <li className="list-disc">Code was implemented in Python using libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</li>
                        <li className="list-disc">No heavy data augmentation or GPU-accelerated deep learning was involved.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">Data Preprocessing</h3>
                  <p className="text-gray-700 mb-4">
                    To ensure the model performed reliably across varied intrusion patterns, we applied a focused set of preprocessing techniques:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Dataset Refinement</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Train-Test Merge</li>
                        <li>• Uploaded to Kaggle </li>
                        <li>• Then resplit</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Data cleaning</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Removed missing values</li>
                        <li>• Addressed outliers</li>
                        <li>• Removed duplicates</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Feature Engineering</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Created a confusion matrix</li>
                        <li>• Extracted top features correlating with target</li>
                        <li>• threshold = 0.3</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Data</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Min max scaling</li>
                        <li>• Label encoding</li>
                        <li>• Split in train, val and test - 70%, 15%, 15%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="evaluation" className="animate-fade-in">
            <Card className="paper-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-theme-blue">Evaluation Protocol</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Benchmark Datasets</h4>
                    <p className="text-gray-700 mb-4">
                      Our approach was evaluated using a publicly available network intrusion dataset to ensure a fair and comprehensive assessment.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Logistic Regression</h5>
                        <p className="text-xs text-gray-600">Linear baseline classifier</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Nearest Centroid Classifier</h5>
                        <p className="text-xs text-gray-600">Finds nearest centroid and classify</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Decision Tree</h5>
                        <p className="text-xs text-gray-600">Rule-based flow model</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Random Forest</h5>
                        <p className="text-xs text-gray-600">Ensemble of Decision Trees</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Naive Bayes</h5>
                        <p className="text-xs text-gray-600"> Probabilistic feature-based model</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">LDA</h5>
                        <p className="text-xs text-gray-600"> Linear class separator</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Single-Layer Perceptron</h5>
                        <p className="text-xs text-gray-600"> Basic neural unit</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Multi-Layer Perceptron</h5>
                        <p className="text-xs text-gray-600"> Deep neural network</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Evaluation Metrics</h4>
                    <p className="text-gray-700 mb-4">
                      We used the following metrics to comprehensively evaluate retrieval performance:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Accuracy</h5>
                        <p className="text-xs text-gray-600">Overall proportion of correctly classified instances.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Precision, Recall, and F1-Score</h5>
                        <p className="text-xs text-gray-600">Captures the balance between false positives and false negatives.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Confusion Matrix</h5>
                        <p className="text-xs text-gray-600">Visual representation of classification performance across all classes.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">ROC Curve</h5>
                        <p className="text-xs text-gray-600">Evaluates the model’s ability to distinguish between classes across thresholds.</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Precision-Recall Curve</h5>
                        <p className="text-xs text-gray-600">Highlights performance under class imbalance conditions.</p>
                      </div>

                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold mt-8 mb-4">Comparative Results</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Method</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Accuracy</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Precision</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Recall</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">F1-Score</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Logistic Regression</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">94.19</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">93.95</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">93.94</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">93.94</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Nearest Centroid Classifier</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">84.57</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">90.07</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">76.23</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">82.58</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Decision Tree</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">96.79</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">97.44</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">95.82</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">96.62</td>
                        
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Random Forest</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">97.75</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">98.24</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">97.06</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">97.65</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">LDA</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">93.32</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">94.50</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">91.14</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">92.29</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Naive Bayes</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">90.45</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">97.37</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">82.23</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">89.22</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Single Layer Perceptron</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">89.00</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">82.00</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">99.00</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">90.00</td>
                      </tr>
                      <tr className="bg-theme-lightBlue/30">
                        <td className="px-4 py-3 text-sm font-bold text-theme-blue">Multi Layer Perceptron</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">99.69</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">99.40</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">99.74</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">99.57</td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MethodologySection;
