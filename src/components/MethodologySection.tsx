
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
                    Our architecture leverages a dual-stream transformer approach that processes visual and semantic information in parallel pathways:
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Visual Encoder</h4>
                    <p className="text-gray-700 mb-3">
                      The visual encoder divides input images into 16×16 patches and processes them through 12 transformer layers with 12 attention heads each. This design enables the model to capture both local features and global context:
                    </p>
                    <ul className="space-y-2 text-gray-700 pl-5">
                      <li className="list-disc">Patch embedding layer (768 dimensions)</li>
                      <li className="list-disc">Positional encoding to retain spatial information</li>
                      <li className="list-disc">Multi-head self-attention modules with 768-dimensional queries, keys, and values</li>
                      <li className="list-disc">Layer normalization and residual connections</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Hierarchical Attention</h4>
                    <p className="text-gray-700">
                      We introduce a hierarchical attention mechanism that operates at multiple scales, allowing the model to focus on salient regions while maintaining awareness of the overall image composition. This mechanism consists of:
                    </p>
                    <ul className="space-y-2 text-gray-700 pl-5 mt-2">
                      <li className="list-disc">Local attention modules (patch-level)</li>
                      <li className="list-disc">Region attention modules (intermediate-level)</li>
                      <li className="list-disc">Global attention module (image-level)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">Feature Extraction</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Deep Visual Features</h4>
                      <p className="text-sm text-gray-700">
                        Our model extracts a 1024-dimensional feature vector that captures high-level semantic concepts and spatial relationships between objects in the image.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Multi-scale Representation</h4>
                      <p className="text-sm text-gray-700">
                        By combining features from different layers, we create a multi-scale representation that captures both fine-grained details and high-level semantics.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Contrastive Learning</h4>
                      <p className="text-sm text-gray-700">
                        We employ contrastive learning to ensure that similar images have similar feature representations, improving retrieval accuracy.
                      </p>
                    </div>
                    
                    <div className="relative mt-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-theme-blue to-purple-600 rounded-lg blur opacity-10"></div>
                      <div className="code-block relative">
                        <pre>
{`# Feature extraction pseudocode
def extract_features(image):
    # Split image into patches
    patches = split_into_patches(image, size=16)
    
    # Extract patch embeddings
    embeddings = patch_embedding_layer(patches)
    
    # Add positional encodings
    embeddings = add_positional_encoding(embeddings)
    
    # Process through transformer layers
    for layer in transformer_layers:
        embeddings = layer(embeddings)
        
    # Global pooling for final representation
    global_feature = mean_pooling(embeddings)
    
    return global_feature`}
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
                      <h4 className="font-semibold mb-2">Dataset</h4>
                      <p className="text-gray-700">
                        The model was trained on a curated dataset consisting of:
                      </p>
                      <ul className="space-y-1 text-gray-700 pl-5 mt-2">
                        <li className="list-disc">1.2M images from ImageNet</li>
                        <li className="list-disc">300K images from MSCOCO</li>
                        <li className="list-disc">200K images from Open Images</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Loss Function</h4>
                      <p className="text-gray-700">
                        We employ a combination of:
                      </p>
                      <ul className="space-y-1 text-gray-700 pl-5 mt-2">
                        <li className="list-disc">InfoNCE contrastive loss</li>
                        <li className="list-disc">Triplet loss with hard negative mining</li>
                        <li className="list-disc">Auxiliary classification loss</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Optimization</h4>
                      <p className="text-gray-700">
                        AdamW optimizer with:
                      </p>
                      <ul className="space-y-1 text-gray-700 pl-5 mt-2">
                        <li className="list-disc">Learning rate: 1e-4 with cosine decay</li>
                        <li className="list-disc">Weight decay: 0.05</li>
                        <li className="list-disc">Batch size: 256 (distributed across 8 GPUs)</li>
                        <li className="list-disc">Training epochs: 100</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="paper-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4 text-theme-blue">Data Augmentation</h3>
                  <p className="text-gray-700 mb-4">
                    To improve model robustness and generalization, we applied extensive data augmentation techniques:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Geometric</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Random resized crops</li>
                        <li>• Random horizontal flips</li>
                        <li>• Random rotations (±10°)</li>
                        <li>• Random perspective</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Color</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Color jitter</li>
                        <li>• Random grayscale</li>
                        <li>• Random solarization</li>
                        <li>• Gaussian blur</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Occlusion</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Random erasing</li>
                        <li>• CutMix</li>
                        <li>• MixUp</li>
                        <li>• GridMask</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium text-sm mb-2">Advanced</h5>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• StyleMix</li>
                        <li>• AdaIN</li>
                        <li>• RandAugment</li>
                        <li>• AutoAugment</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mt-6 mb-3">Training Progress</h4>
                  <div className="h-48 bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400 text-sm">Learning curve visualization</p>
                      </div>
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
                      We evaluated our approach on multiple standard benchmark datasets to ensure comprehensive assessment:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Oxford5K</h5>
                        <p className="text-xs text-gray-600">5,062 images of Oxford landmarks with 55 query images</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Paris6K</h5>
                        <p className="text-xs text-gray-600">6,412 images of Paris landmarks with 70 query images</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">ROxford5K & RParis6K</h5>
                        <p className="text-xs text-gray-600">Revisited versions with more challenging protocols</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">INSTRE</h5>
                        <p className="text-xs text-gray-600">Small objects dataset with 28,543 images and 250 object classes</p>
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
                        <h5 className="font-medium text-sm">mAP (mean Average Precision)</h5>
                        <p className="text-xs text-gray-600">Area under the precision-recall curve, averaged across all queries</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Precision@k</h5>
                        <p className="text-xs text-gray-600">Precision of top k retrieved results (k = 1, 5, 10)</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Recall@k</h5>
                        <p className="text-xs text-gray-600">Recall of top k retrieved results (k = 10, 100, 1000)</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-sm">Query Time</h5>
                        <p className="text-xs text-gray-600">Average time to retrieve results from the database</p>
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
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Oxford5K<br/>mAP</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Paris6K<br/>mAP</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ROxford<br/>Medium</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ROxford<br/>Hard</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">SIFT + BoW</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">55.7</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">59.9</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">36.1</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">17.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">CNN (ResNet-101)</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">78.9</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">82.4</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">63.2</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">36.8</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">DELF</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">83.8</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">85.0</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">67.8</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">43.1</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">GeM</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">87.8</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">87.3</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">69.8</td>
                        <td className="px-4 py-3 text-sm text-center text-gray-500">47.6</td>
                      </tr>
                      <tr className="bg-theme-lightBlue/30">
                        <td className="px-4 py-3 text-sm font-bold text-theme-blue">IntelliVision (Ours)</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">92.3</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">93.1</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">76.5</td>
                        <td className="px-4 py-3 text-sm text-center font-bold text-theme-blue">54.7</td>
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
