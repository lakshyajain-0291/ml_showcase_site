
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BibTexSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const bibTexContent = `@inproceedings{smith2023NIDS,
  title={NIDS: A Novel Transformer-based Approach to Content-based Image Retrieval},
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
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibTexContent);
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "BibTeX citation has been copied to your clipboard.",
      duration: 2000,
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-white" id="bibtex">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Citation" 
          subtitle="Use the following BibTeX entries to cite our work"
        />
        
        <div className="max-w-4xl mx-auto">
          <Card className="paper-shadow">
            <CardContent className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-theme-blue">BibTeX Citation</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopy} 
                  className="flex items-center gap-1 border-theme-blue text-theme-blue hover:bg-theme-lightBlue"
                >
                  <Copy className="h-4 w-4" /> 
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              
              <pre className="code-block overflow-x-auto text-xs md:text-sm whitespace-pre-wrap">
                {bibTexContent}
              </pre>
              
              <div className="mt-6 p-4 bg-theme-lightBlue/50 border border-theme-blue/20 rounded-md">
                <h4 className="font-medium text-theme-darkBlue text-sm mb-2">How to Cite</h4>
                <p className="text-sm text-gray-700">
                  When referring to this work in academic publications, please consider citing both the conference paper and the journal article as shown in the BibTeX entries above.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BibTexSection;
