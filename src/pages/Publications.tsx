import React, { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, ExternalLink, Download, Github } from "lucide-react";

type PublicationType = "journal" | "conference" | "workshop" | "preprint" | "all" | "blockchain" | "development" | "Machine Learning" | "DevOps";

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
      title: "NIDS: A Novel Transformer-based Approach to Content-based Image Retrieval",
      authors: "Aradhya, Arpan, Divyansh, Mohit, Lakshya, Vyom",
      venue: "PRML Project",
      year: 2025,
      type: "Machine Learning",
      abstract: "We present NIDS, a novel machine learning-based approach to real-time network intrusion detection that leverages a diverse range of classification models for accurate and efficient threat identification.",
      code: "https://github.com/example/NIDS"
    },
    {
      title: "MPV: Audio reactive Music Player And Visualizer",
      authors: "Divyansh, Nithyan, Akshaya, Subhanshu",
      venue: "Winter of Code",
      year: 2025,
      type: "development",
      abstract: "An immersive visual system that responds to music through dynamic animations and evolving patterns. As the audio plays, the visuals shift in real time across different styles, creating a rich, responsive experience that enhances the way sound is perceived. Designed to blend motion, rhythm, and visual storytelling.",
      code: "https://github.com/divyansh1010x/MPV"
    },
    {
      title: "GitCury: Your Ultimate Git Sidekick",
      authors: "Lakshya",
      venue: "Personal Project",
      year: 2025,
      type: "DevOps",
      abstract: "GitCury is your ultimate Git sidekick! Built with Go, it automates your Git workflow with AI-powered commit messages, root folder filtering, alias-based commands, and CLI utilities that make Git operations a breeze. Whether you're managing a single repo or juggling multiple projects, GitCury has your back.",
      code: "https://github.com/lakshyajain-0291/GitCury"
    },
    {
      title: "LIBR: A moderated, censorship resilient digital forum",
      authors: "Aradhya, Arpan, Lakshya, Devesh, Diwanshu",
      venue: "Software Engineer Project",
      year: 2025,
      type: "development",
      abstract: "LIBR is a Decentralized Forum designed to offer community control over forum content utilizing concepts of Distributed Hash Tables for Decentralization, Byzantine Consistent Broadcasts for Fault Tolerance and Natural Language Processing for Text Moderation. With a robust and fast core written in Go, Blockshare provides an intuitive CLI interface for a censorship resilient yet moderated digital forum",
      code: "https://github.com/DALDA-IITJ/libr"
    },
    {
      title: "Blockshare: A decentralized blockchain platform with C++ core and JS API layer",
      authors: "Aradhya, Arpan, Yash, Prinyanshu",
      venue: "DSA Project",
      year: 2024,
      type: "blockchain",
      abstract: "BlockShare is a decentralized ledger and blockchain platform designed for running your own cryptocurrency in a local network environment. With a C++ core handling blockchain operations and a JavaScript-based API layer for client interactions, BlockShare provides a functional peer-to-peer network that supports transaction processing, balance management, and digital signature verification.",
      code: "https://github.com/aradhya2708/blockshare"
    },
    {
      title: "Automated Whatsapp Messanger Platform",
      authors: "Divyansh, Mohit, Madhav",
      venue: "Design Credit Project",
      year: 2025,
      type: "development",
      abstract: "A scalable, end-to-end platform designed to automate and personalize WhatsApp communication at scale. Combines an intuitive web interface with a robust backend to manage campaigns, segment audiences, and deliver scheduled messages tailored for workers, customers, and publishers. Built to empower businesses with consistent, intelligent outreach and streamlined engagement across user groups.",
      code: "https://github.com/divyansh1010x/whatsapp_messenger"
    },
    {
      title: "Video Analysis of Virechan Procedure",
      authors: "Vyom Shah, Ishan Shah",
      venue: "Design Credit Project",
      year: 2025,
      type: "Machine Learning",
      abstract: "This Project investigates a novel approach for video analysis in Ayurveda, focusing on the Virechan procedure in Panchkarma, which involves therapeutic vomiting after consuming large quantities of ghee. Working with videos provided by the Indian Institute of Ayurveda, we developed a model to automatically identify and analyze specific events in this procedure.",
      code: "https://github.com/Vyom1111"
    },
    {
      title: "KDTreeImageClustering",
      authors: "Mohit, Neeraj, Mayank, Reshma ,Nishu",
      venue: "DSA Project",
      year: 2024,
      type: "development",
      abstract: "We devloped a Hierarchical Image clustering pipeline in C++ by leveraging normalized RGB color histograms and multidimensional KD-Tree tree with lograrithmic-time nearest-neighbour search and recursive median splits, enabling real time clustering",
      code: "https://github.com/Mohi1038/KDTreeImageClustering"
    },
    {
      title: "Deployment Server",
      authors: "Mohit, Shweta, Akhil",
      venue: "Winter of Code",
      year: 2025,
      type: "DevOps",
      abstract: "Engineered a Github Probot App which automate cloud infrastructure provisioning and deployment using Terraform and shell scripts , streamlining DevOps and eliminating manual SSH-based VM provisioning by dynamic credential validation and automated deployment via Github trigger issues",
      code: "https://github.com/Mohi1038/DeploymentServer"
    },
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
    journal: publications.filter(p => p.type === "development").length,
    conference: publications.filter(p => p.type === "DevOps").length,
    workshop: publications.filter(p => p.type === "blockchain").length,
    preprint: publications.filter(p => p.type === "Machine Learning").length
  };

  return (
    <Layout>
      <div className="py-12 bg-theme-lightBlue/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            See the other works of our team members in other fields.
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
              variant={filter === "development" ? "default" : "outline"} 
              onClick={() => setFilter("development")}
              className={filter === "development" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Development ({publicationCounts.journal})
            </Button>
            <Button 
              variant={filter === "DevOps" ? "default" : "outline"} 
              onClick={() => setFilter("DevOps")}
              className={filter === "DevOps" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              DevOps ({publicationCounts.conference})
            </Button>
            <Button 
              variant={filter === "blockchain" ? "default" : "outline"} 
              onClick={() => setFilter("blockchain")}
              className={filter === "blockchain" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Blockchain ({publicationCounts.workshop})
            </Button>
            <Button 
              variant={filter === "Machine Learning" ? "default" : "outline"} 
              onClick={() => setFilter("Machine Learning")}
              className={filter === "Machine Learning" ? "bg-theme-blue hover:bg-theme-darkBlue" : ""}
            >
              Machine Learning ({publicationCounts.preprint})
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
                            pub.type === "Machine Learning" ? "rgba(56, 189, 248, 0.1)" : 
                            pub.type === "DevOps" ? "rgba(52, 211, 153, 0.1)" : 
                            pub.type === "development" ? "rgba(249, 168, 212, 0.1)" :
                            "rgba(253, 230, 138, 0.1)",
                          color: 
                            pub.type === "Machine Learning" ? "rgb(14, 165, 233)" : 
                            pub.type === "DevOps" ? "rgb(16, 185, 129)" : 
                            pub.type === "development" ? "rgb(236, 72, 153)" :
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
      </div>
    </Layout>
  );
};

export default Publications;
