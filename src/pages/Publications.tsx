import React, { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, ExternalLink, Download, Github } from "lucide-react";

type PublicationType = "journal" | "conference" | "workshop" | "preprint" | "all";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: Exclude<PublicationType, "all">;
  abstract: string;
  link?: string;
  pdf?: string;
  code?: string;
}

const Publications = () => {
  const [filter, setFilter] = useState<PublicationType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const publications: Publication[] = [
    {
      title: "IntelliVision: A Novel Transformer-based Approach to Content-based Image Retrieval",
      authors: "Smith, J., Johnson, E., Williams, R., Davis, S.",
      venue: "International Conference on Computer Vision (ICCV)",
      year: 2023,
      type: "conference",
      abstract: "We present IntelliVision, a novel approach to content-based image retrieval that leverages state-of-the-art transformer models for visual feature extraction. Our framework employs a hierarchical attention mechanism that enables the model to focus on salient regions while maintaining awareness of the overall image composition.",
      link: "#",
      pdf: "#",
      code: "https://github.com/example/intellivision"
    },
    {
      title: "Hierarchical Attention Mechanisms for Improved Visual Feature Extraction",
      authors: "Smith, J., Chen, M., Brown, D.",
      venue: "Transactions on Pattern Analysis and Machine Intelligence",
      year: 2023,
      type: "journal",
      abstract: "This paper presents a novel hierarchical attention mechanism for visual feature extraction. By operating at multiple scales, our approach can effectively capture both local details and global context. Experimental results demonstrate significant improvements in feature quality for downstream tasks.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Efficient Indexing Structures for Large-Scale Image Retrieval",
      authors: "Williams, R., Smith, J.",
      venue: "European Conference on Computer Vision (ECCV)",
      year: 2022,
      type: "conference",
      abstract: "We propose a novel indexing structure for efficient retrieval from large-scale image databases. Our approach combines hierarchical navigable small world graphs with feature compression techniques, achieving state-of-the-art performance in terms of both accuracy and query time.",
      link: "#",
      pdf: "#",
      code: "https://github.com/example/efficient-indexing"
    },
    {
      title: "Self-Supervised Pretraining for Image Retrieval Models",
      authors: "Johnson, E., Davis, S., Smith, J.",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: 2022,
      type: "conference",
      abstract: "This paper introduces a self-supervised pretraining approach specifically designed for image retrieval tasks. By leveraging contrastive learning with carefully designed augmentation strategies, our method significantly improves the quality of learned representations without requiring labeled data.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Cross-Modal Retrieval with Visual-Semantic Alignment",
      authors: "Davis, S., Johnson, E.",
      venue: "Workshop on Multimodal Learning, ICLR",
      year: 2023,
      type: "workshop",
      abstract: "We address the challenge of retrieving images using text queries and vice versa. Our approach aligns visual and textual representations in a shared embedding space using a novel attention-based fusion mechanism that preserves modality-specific information while enabling cross-modal retrieval.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Adaptive Token Merging for Efficient Vision Transformers",
      authors: "Chen, M., Smith, J., Brown, D.",
      venue: "arXiv preprint",
      year: 2023,
      type: "preprint",
      abstract: "This paper introduces Adaptive Token Merging (ATM), a technique to dynamically reduce the computational complexity of vision transformers. By identifying and merging similar patch tokens during inference, ATM achieves substantial speed improvements with minimal accuracy degradation.",
      link: "#",
      pdf: "#",
      code: "https://github.com/example/adaptive-token-merging"
    },
    {
      title: "Query Refinement for Interactive Image Retrieval",
      authors: "Brown, D., Williams, R.",
      venue: "ACM Multimedia",
      year: 2022,
      type: "conference",
      abstract: "We propose an interactive query refinement approach for image retrieval systems. By incorporating user feedback on retrieved results, our system progressively refines the query representation, leading to more accurate results over successive iterations.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Explainable Content-Based Image Retrieval via Attention Visualization",
      authors: "Smith, J., Davis, S.",
      venue: "IEEE Transactions on Multimedia",
      year: 2023,
      type: "journal",
      abstract: "This paper addresses the black-box nature of deep learning-based image retrieval systems by developing techniques to visualize and explain retrieval decisions. By analyzing attention patterns and generating natural language explanations, our approach increases user trust and system transparency.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Few-Shot Learning for Domain-Specific Image Retrieval",
      authors: "Johnson, E., Chen, M.",
      venue: "International Conference on Learning Representations (ICLR)",
      year: 2022,
      type: "conference",
      abstract: "We present a few-shot learning approach for adapting image retrieval models to specialized domains with limited labeled data. Using meta-learning techniques, our method can quickly adapt to new domains while maintaining strong generalization performance.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Continual Learning for Evolving Image Retrieval Systems",
      authors: "Davis, S., Smith, J.",
      venue: "arXiv preprint",
      year: 2023,
      type: "preprint",
      abstract: "This paper addresses the challenge of incrementally updating image retrieval systems with new data without catastrophic forgetting of previously learned concepts. Our approach combines experience replay with parameter regularization to achieve stable performance over time.",
      link: "#",
      pdf: "#",
      code: "https://github.com/example/continual-retrieval"
    }
  ];
  
  const filteredPublications = publications
    .filter(pub => filter === "all" || pub.type === filter)
    .filter(pub => 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.year - a.year);
  
  const publicationCounts = {
    all: publications.length,
    journal: publications.filter(p => p.type === "journal").length,
    conference: publications.filter(p => p.type === "conference").length,
    workshop: publications.filter(p => p.type === "workshop").length,
    preprint: publications.filter(p => p.type === "preprint").length
  };

  return (
    <Layout>
      <div className="py-12 bg-theme-lightBlue/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our research contributions to content-based image retrieval and computer vision.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              All ({publicationCounts.all})
            </Button>
            <Button 
              variant={filter === "journal" ? "default" : "outline"} 
              onClick={() => setFilter("journal")}
              className={filter === "journal" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Journals ({publicationCounts.journal})
            </Button>
            <Button 
              variant={filter === "conference" ? "default" : "outline"} 
              onClick={() => setFilter("conference")}
              className={filter === "conference" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Conferences ({publicationCounts.conference})
            </Button>
            <Button 
              variant={filter === "workshop" ? "default" : "outline"} 
              onClick={() => setFilter("workshop")}
              className={filter === "workshop" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Workshops ({publicationCounts.workshop})
            </Button>
            <Button 
              variant={filter === "preprint" ? "default" : "outline"} 
              onClick={() => setFilter("preprint")}
              className={filter === "preprint" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Preprints ({publicationCounts.preprint})
            </Button>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search publications..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No publications found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            filteredPublications.map((pub, index) => (
              <Card key={index} className="paper-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 capitalize" 
                        style={{ 
                          backgroundColor: 
                            pub.type === "journal" ? "rgba(56, 189, 248, 0.1)" : 
                            pub.type === "conference" ? "rgba(52, 211, 153, 0.1)" : 
                            pub.type === "workshop" ? "rgba(249, 168, 212, 0.1)" :
                            "rgba(253, 230, 138, 0.1)",
                          color: 
                            pub.type === "journal" ? "rgb(14, 165, 233)" : 
                            pub.type === "conference" ? "rgb(16, 185, 129)" : 
                            pub.type === "workshop" ? "rgb(236, 72, 153)" :
                            "rgb(234, 179, 8)"
                        }}
                      >
                        {pub.type}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      <p className="text-gray-700 text-sm mb-2">{pub.authors}</p>
                      <p className="text-theme-blue font-medium text-sm mb-4">
                        {pub.venue}, {pub.year}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">{pub.abstract}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {pub.link && (
                          <a 
                            href={pub.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-theme-blue hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1" /> View Publication
                          </a>
                        )}
                        {pub.pdf && (
                          <a 
                            href={pub.pdf} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-theme-blue hover:underline"
                          >
                            <Download className="h-3.5 w-3.5 mr-1" /> PDF
                          </a>
                        )}
                        {pub.code && (
                          <a 
                            href={pub.code} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-theme-blue hover:underline"
                          >
                            <Github className="h-3.5 w-3.5 mr-1" /> Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        
        <Card className="paper-shadow mt-12">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-theme-blue">Citation Information</h3>
            
            <p className="text-gray-700 mb-6">
              If you use our research in your work, please cite our key publications using the BibTeX entries provided below:
            </p>
            
            <div className="code-block overflow-x-auto text-xs md:text-sm whitespace-pre-wrap mb-6">
{`@inproceedings{smith2023intellivision,
  title={IntelliVision: A Novel Transformer-based Approach to Content-based Image Retrieval},
  author={Smith, John and Johnson, Emily and Williams, Robert and Davis, Sarah},
  booktitle={Proceedings of the International Conference on Computer Vision (ICCV)},
  pages={3215--3224},
  year={2023},
  organization={IEEE}
}

@article{smith2023hierarchical,
  title={Hierarchical Attention Mechanisms for Improved Visual Feature Extraction},
  author={Smith, John and Chen, Michael and Brown, David},
  journal={Transactions on Pattern Analysis and Machine Intelligence},
  volume={45},
  number={8},
  pages={9376--9390},
  year={2023},
  publisher={IEEE}
}`}
            </div>
            
            <div className="bg-theme-lightBlue p-4 rounded-lg">
              <h4 className="font-medium text-theme-darkBlue mb-2">Preprint Access</h4>
              <p className="text-sm text-gray-700">
                For papers behind paywalls, you can find preprint versions of all our publications on 
                <a href="#" className="text-theme-blue hover:underline ml-1">our lab's website</a> or on 
                <a href="#" className="text-theme-blue hover:underline ml-1">arXiv</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Publications;
