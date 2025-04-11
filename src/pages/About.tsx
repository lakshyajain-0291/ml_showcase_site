
import React from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <Layout>
      <div className="py-12 bg-theme-lightBlue/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Details</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Comprehensive information about our research methodology, findings, and future directions.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="approach" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="future">Future Work</TabsTrigger>
          </TabsList>
          
          <TabsContent value="approach" className="animate-fade-in">
            <SectionTitle 
              title="Technical Approach" 
              subtitle="In-depth explanation of our research methodology"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="paper-shadow col-span-1 lg:col-span-2">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Dual-Stream Transformer Architecture
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our approach leverages a dual-stream transformer architecture that processes both visual and semantic information in parallel pathways. This design allows the model to capture rich contextual relationships while maintaining computational efficiency.
                  </p>
                  
                  <h4 className="font-semibold mb-2 mt-6">Visual Encoder</h4>
                  <p className="text-gray-700 mb-4">
                    The visual encoder consists of a stack of transformer blocks that process image patches as sequential tokens. Each transformer block includes multi-head self-attention layers that capture relationships between different regions of the image, followed by feed-forward networks for feature transformation.
                  </p>
                  
                  <h4 className="font-semibold mb-2 mt-6">Cross-Modal Attention</h4>
                  <p className="text-gray-700 mb-4">
                    To enhance the model's ability to understand semantic concepts, we incorporate cross-modal attention mechanisms that align visual features with semantic embeddings. This allows the model to learn meaningful representations that bridge the gap between visual appearance and semantic meaning.
                  </p>
                  
                  <h4 className="font-semibold mb-2 mt-6">Hierarchical Feature Pyramid</h4>
                  <p className="text-gray-700">
                    We implement a hierarchical feature pyramid that aggregates features from different levels of the transformer network. This multi-scale representation enables the model to capture both fine-grained details and high-level semantic concepts, making it effective for retrieving images with varying levels of visual similarity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Key Technical Innovations
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Adaptive Token Merging</h4>
                      <p className="text-sm text-gray-700">
                        Novel technique that dynamically merges similar patch tokens to reduce computational complexity while preserving important details.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Contrastive Pretraining</h4>
                      <p className="text-sm text-gray-700">
                        Self-supervised pretraining using a contrastive objective that encourages similar images to have similar feature representations.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Efficient Indexing</h4>
                      <p className="text-sm text-gray-700">
                        Hierarchical Navigable Small World (HNSW) graph structure for fast approximate nearest neighbor search in high-dimensional feature space.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Query Refinement</h4>
                      <p className="text-sm text-gray-700">
                        Iterative query refinement mechanism that uses relevance feedback to improve search results based on user interactions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="paper-shadow mb-12">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-theme-blue">
                  Implementation Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Model Architecture</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Visual Encoder: 12 transformer layers with 12 attention heads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Hidden dimension: 768</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>MLP dimension: 3072</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Patch size: 16×16 pixels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Output feature dimension: 1024</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Training</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Batch size: 256</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Optimizer: AdamW (β1=0.9, β2=0.999)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Learning rate: 1e-4 with cosine decay</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Weight decay: 0.05</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Training epochs: 100</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Retrieval System</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Index type: HNSW with 32 links per node</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Distance metric: Cosine similarity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Query expansion: Top-3 results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Feature compression: PQ with 8 bits per dimension</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Hardware: NVIDIA A100 GPUs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results" className="animate-fade-in">
            <SectionTitle 
              title="Research Findings" 
              subtitle="Experimental results and key insights"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Quantitative Results
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Our model achieves state-of-the-art results across multiple benchmark datasets, outperforming previous approaches by a significant margin. Below are the key performance metrics:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Oxford5K Dataset</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">mAP</span>
                            <span className="text-sm font-medium text-theme-blue">92.3%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-theme-blue h-2 rounded-full" style={{ width: "92.3%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">P@10</span>
                            <span className="text-sm font-medium text-theme-blue">94.7%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-theme-blue h-2 rounded-full" style={{ width: "94.7%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Paris6K Dataset</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">mAP</span>
                            <span className="text-sm font-medium text-theme-blue">93.1%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-theme-blue h-2 rounded-full" style={{ width: "93.1%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">P@10</span>
                            <span className="text-sm font-medium text-theme-blue">96.2%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-theme-blue h-2 rounded-full" style={{ width: "96.2%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">ROxford5K (Hard)</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">mAP</span>
                            <span className="text-sm font-medium text-theme-blue">54.7%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-theme-blue h-2 rounded-full" style={{ width: "54.7%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">P@10</span>
                            <span className="text-sm font-medium text-theme-blue">60.3%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-theme-blue h-2 rounded-full" style={{ width: "60.3%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Qualitative Analysis
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Beyond numerical metrics, we conducted qualitative analysis to understand the strengths and limitations of our approach:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Semantic Understanding</h4>
                      <p className="text-sm text-gray-700">
                        Our model demonstrates superior ability to understand semantic relationships between objects, even when their visual appearance differs significantly. For example, it can associate images of different dog breeds based on the "dog" concept rather than just visual similarity.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Robustness to Variations</h4>
                      <p className="text-sm text-gray-700">
                        The model shows strong robustness to various image transformations including viewpoint changes, lighting variations, and partial occlusions. This is particularly valuable for real-world applications where query images may not perfectly match database images.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Fine-Grained Retrieval</h4>
                      <p className="text-sm text-gray-700">
                        For specialized domains such as landmark recognition or product retrieval, our approach can distinguish between visually similar but distinct instances (e.g., different buildings with similar architectural styles).
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-semibold mb-2">Limitations</h4>
                      <p className="text-sm text-gray-700">
                        The model occasionally struggles with highly abstract concepts and images with multiple dominant subjects. Performance is also somewhat reduced for very small objects within complex scenes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="paper-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-theme-blue">
                  Ablation Studies
                </h3>
                
                <p className="text-gray-700 mb-6">
                  To understand the contribution of individual components, we conducted extensive ablation studies:
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Model Variant</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Oxford5K<br/>mAP</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Paris6K<br/>mAP</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ROxford<br/>(Hard)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Full Model</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">92.3</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">93.1</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">54.7</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">w/o Hierarchical Attention</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">89.5</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">90.8</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">50.2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">w/o Token Merging</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">91.9</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">92.7</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">54.1</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">w/o Contrastive Pretraining</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">86.4</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">87.9</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">47.6</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Smaller Model (6 layers)</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">88.1</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">89.3</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">49.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-semibold mb-2">Key Insights from Ablations</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Hierarchical attention mechanism provides a 2.8% average improvement in mAP across datasets.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Contrastive pretraining is the most critical component, with a 5.9% drop in performance when removed.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Token merging maintains nearly identical performance while reducing computational requirements by 35%.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Model size is important but shows diminishing returns beyond 8 transformer layers.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-semibold mb-2">Computational Efficiency</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      We also evaluated the computational efficiency of different model configurations:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Full model: 45ms inference time per query</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>With token merging: 29ms (35% faster)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>6-layer model: 21ms (53% faster)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-theme-blue mr-2">•</span>
                        <span>Memory usage: 2.3GB for full model, 1.7GB for optimized version</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="future" className="animate-fade-in">
            <SectionTitle 
              title="Future Directions" 
              subtitle="Ongoing research and potential extensions"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-theme-blue text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                      <path d="M6 9v12"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Multi-Modal Integration
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    We are working on extending our architecture to incorporate multiple modalities, including text and audio, for more comprehensive understanding of multimedia content.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Text-guided image retrieval using natural language queries</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Cross-modal retrieval across image, text, and audio domains</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Multimodal fusion techniques for enhanced feature representation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-theme-blue text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"></path>
                      <path d="m5 8 4 4"></path>
                      <path d="m12 15 4 4"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Explainable AI
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    Developing methods to make the retrieval process more transparent and understandable by visualizing attention maps and providing explanations for why specific images were retrieved.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Attention visualization tools for transformer models</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Feature attribution methods to identify influential image regions</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Natural language explanations for retrieval decisions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-theme-blue text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">
                    Continual Learning
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    Investigating techniques for incrementally updating the retrieval model with new data without requiring complete retraining or compromising performance on previously learned concepts.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Experience replay mechanisms for knowledge retention</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Elastic weight consolidation to prevent catastrophic forgetting</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-theme-blue mr-2">•</span>
                      <span className="text-gray-700 text-sm">Dynamic architecture expansion for accommodating new domains</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="paper-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-theme-blue">
                  Potential Applications
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Industrial Applications</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-medium mb-2">E-commerce Visual Search</h5>
                        <p className="text-sm text-gray-700">
                          Enabling customers to find products by uploading images, improving shopping experience and conversion rates. Our model's strong semantic understanding is particularly valuable for fashion and home goods.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-medium mb-2">Medical Image Analysis</h5>
                        <p className="text-sm text-gray-700">
                          Retrieving similar medical images (X-rays, MRIs, etc.) to aid in diagnosis by finding cases with similar pathologies. The hierarchical attention mechanism can help focus on relevant anatomical regions.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-medium mb-2">Content Moderation</h5>
                        <p className="text-sm text-gray-700">
                          Identifying potentially harmful or inappropriate images by comparing against a database of known problematic content. Our model's robust feature extraction helps with detecting near-duplicates and variations.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Research Extensions</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-medium mb-2">Few-Shot Learning</h5>
                        <p className="text-sm text-gray-700">
                          Adapting the model to recognize new visual concepts from only a few examples, reducing the need for extensive labeled data in specialized domains.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-medium mb-2">Video Understanding</h5>
                        <p className="text-sm text-gray-700">
                          Extending the architecture to process temporal information in videos, enabling content-based video retrieval and scene understanding.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-medium mb-2">Interactive Retrieval</h5>
                        <p className="text-sm text-gray-700">
                          Developing systems that refine search results based on user feedback and preferences, creating a more personalized and accurate retrieval experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-theme-lightBlue/50 p-6 rounded-lg border border-theme-blue/20">
                  <h4 className="font-semibold mb-3 text-theme-darkBlue">Collaboration Opportunities</h4>
                  <p className="text-gray-700 mb-4">
                    We are actively seeking collaborations with researchers and industry partners interested in:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-theme-blue/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue">
                          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8Z"></path>
                          <path d="M17 3h-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1Z"></path>
                          <path d="M8 12h8"></path>
                          <path d="M10 12v7a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-7"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Domain-Specific Datasets</h5>
                        <p className="text-xs text-gray-600">Access to specialized image collections for testing and fine-tuning</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-theme-blue/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Real-World Testing</h5>
                        <p className="text-xs text-gray-600">Deploying and evaluating our system in practical applications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-theme-blue/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue">
                          <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                          <path d="M17 3v5h5"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Computational Resources</h5>
                        <p className="text-xs text-gray-600">Access to high-performance computing for larger-scale experiments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-theme-blue/10 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-theme-blue">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Interdisciplinary Insights</h5>
                        <p className="text-xs text-gray-600">Collaborating with experts in cognitive science and human perception</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default About;
