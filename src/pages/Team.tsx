
import React from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  publications: number;
  expertise: string[];
  education: string;
  links: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  image, 
  bio, 
  publications, 
  expertise, 
  education,
  links 
}) => {
  return (
    <Card className="paper-shadow h-full">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <div className="aspect-square overflow-hidden">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-theme-blue font-medium text-sm mb-4">{role}</p>
            
            <p className="text-gray-700 mb-4">
              {bio}
            </p>
            
            <div className="mb-4">
              <span className="text-xs font-medium text-gray-500 uppercase">Education</span>
              <p className="text-sm text-gray-700">{education}</p>
            </div>
            
            <div className="mb-4">
              <span className="text-xs font-medium text-gray-500 uppercase">Expertise</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {expertise.map((item, index) => (
                  <span 
                    key={index} 
                    className="bg-theme-lightBlue text-theme-blue text-xs px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase">Publications</span>
                <p className="text-sm font-medium">{publications}</p>
              </div>
              
              <div className="flex space-x-3">
                {links.email && (
                  <a 
                    href={`mailto:${links.email}`} 
                    className="text-gray-600 hover:text-theme-blue"
                    aria-label={`Email ${name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
                {links.linkedin && (
                  <a 
                    href={links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-theme-blue"
                    aria-label={`${name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {links.github && (
                  <a 
                    href={links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-theme-blue"
                    aria-label={`${name}'s GitHub profile`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {links.website && (
                  <a 
                    href={links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-theme-blue"
                    aria-label={`${name}'s personal website`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Dr. John Smith",
      role: "Principal Investigator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800",
      bio: "Dr. Smith leads the IntelliVision research project, bringing extensive experience in computer vision and machine learning. His research focuses on developing advanced visual understanding systems with real-world applications.",
      publications: 45,
      expertise: ["Computer Vision", "Deep Learning", "Image Retrieval", "Transformer Models"],
      education: "Ph.D. in Computer Science, Stanford University",
      links: {
        email: "john.smith@example.edu",
        linkedin: "https://linkedin.com/in/johnsmith",
        github: "https://github.com/johnsmith",
        website: "https://johnsmith.example.edu"
      }
    },
    {
      name: "Emily Johnson",
      role: "Lead Researcher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&h=800",
      bio: "Emily specializes in transformer architectures and self-supervised learning techniques. Her work on hierarchical attention mechanisms has been instrumental in improving the performance of our image retrieval system.",
      publications: 23,
      expertise: ["Transformer Models", "Self-Supervised Learning", "Attention Mechanisms"],
      education: "Ph.D. in Machine Learning, MIT",
      links: {
        email: "emily.johnson@example.edu",
        linkedin: "https://linkedin.com/in/emilyjohnson",
        github: "https://github.com/emilyjohnson"
      }
    },
    {
      name: "Robert Williams",
      role: "Senior Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=800&h=800",
      bio: "Robert is responsible for the system architecture and efficient implementation of our retrieval engine. His expertise in distributed computing has enabled the scalability of our approach to handle large-scale image databases.",
      publications: 17,
      expertise: ["System Architecture", "Distributed Computing", "Efficient ML Implementation"],
      education: "M.S. in Computer Engineering, UC Berkeley",
      links: {
        email: "robert.williams@example.edu",
        github: "https://github.com/robertwilliams",
        website: "https://robertwilliams.example.edu"
      }
    },
    {
      name: "Sarah Davis",
      role: "Ph.D. Candidate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&h=800",
      bio: "Sarah's research focuses on visual attention mechanisms and multimodal learning. She has developed novel approaches to integrate contextual information across modalities, enhancing the semantic understanding of our system.",
      publications: 8,
      expertise: ["Visual Attention", "Multimodal Learning", "Feature Extraction"],
      education: "M.S. in Computer Science, Carnegie Mellon University",
      links: {
        email: "sarah.davis@example.edu",
        linkedin: "https://linkedin.com/in/sarahdavis",
        github: "https://github.com/sarahdavis"
      }
    },
    {
      name: "Michael Chen",
      role: "Research Scientist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&h=800",
      bio: "Michael specializes in contrastive learning and metric learning techniques. His work has significantly improved the discriminative power of the feature representations used in our retrieval system.",
      publications: 19,
      expertise: ["Contrastive Learning", "Metric Learning", "Feature Representation"],
      education: "Ph.D. in Artificial Intelligence, University of Toronto",
      links: {
        email: "michael.chen@example.edu",
        github: "https://github.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen"
      }
    },
    {
      name: "David Brown",
      role: "Research Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=800&h=800",
      bio: "David focuses on efficient implementation of deep learning models and optimization techniques. His work has been essential in making our models computationally efficient while maintaining high accuracy.",
      publications: 12,
      expertise: ["Model Optimization", "Efficient Inference", "Quantization"],
      education: "M.S. in Computer Science, ETH Zurich",
      links: {
        email: "david.brown@example.edu",
        github: "https://github.com/davidbrown",
        website: "https://davidbrown.example.edu"
      }
    }
  ];

  const collaborators = [
    {
      name: "Prof. Jennifer Wilson",
      affiliation: "University of Cambridge",
      contribution: "Expertise in cognitive science and human visual perception"
    },
    {
      name: "Dr. Thomas Lee",
      affiliation: "Google Research",
      contribution: "Provided computational resources and dataset access"
    },
    {
      name: "Visual Data Research Group",
      affiliation: "National Research Institute",
      contribution: "Proprietary dataset access and evaluation protocols"
    },
    {
      name: "Dr. Maria Rodriguez",
      affiliation: "Medical Imaging Center",
      contribution: "Domain expertise in medical image analysis"
    },
    {
      name: "Advanced Computing Center",
      affiliation: "University Research Network",
      contribution: "High-performance computing infrastructure"
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-theme-lightBlue/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Team</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Meet the talented researchers behind the IntelliVision project.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="core">Core Team</TabsTrigger>
            <TabsTrigger value="collaborators">Collaborators & Acknowledgements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="core" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="collaborators" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card className="paper-shadow h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-6 text-theme-blue">Research Collaborators</h3>
                    
                    <div className="space-y-6">
                      {collaborators.map((collaborator, index) => (
                        <div key={index} className="flex items-start border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                          <div>
                            <h4 className="font-semibold">{collaborator.name}</h4>
                            <p className="text-sm text-theme-blue mb-1">{collaborator.affiliation}</p>
                            <p className="text-sm text-gray-700">{collaborator.contribution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="paper-shadow h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-6 text-theme-blue">Funding & Support</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Financial Support</h4>
                        <p className="text-sm text-gray-700 mb-2">This research was supported by:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-theme-blue mr-2">•</span>
                            <span>National Science Foundation (NSF-1234567)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-theme-blue mr-2">•</span>
                            <span>University Research Foundation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-theme-blue mr-2">•</span>
                            <span>Tech Industry Research Grant Program</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Computational Resources</h4>
                        <p className="text-sm text-gray-700">
                          We acknowledge the University Computing Center for providing access to their high-performance computing clusters, which were essential for training our models.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Special Thanks</h4>
                        <p className="text-sm text-gray-700">
                          We extend our gratitude to the anonymous reviewers for their valuable feedback and to the open-source community for developing the software libraries used in this research.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="paper-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-theme-blue">Join Our Team</h3>
                <p className="text-gray-700 mb-6">
                  We are always looking for talented individuals to join our research team. If you are interested in computer vision, machine learning, or content-based image retrieval, consider the following opportunities:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">PhD Positions</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      We have openings for PhD students interested in exploring novel approaches to visual understanding and retrieval systems.
                    </p>
                    <p className="text-sm font-medium">Requirements:</p>
                    <ul className="text-xs text-gray-700 space-y-1 mt-1">
                      <li>• M.S. in Computer Science or related field</li>
                      <li>• Strong background in machine learning</li>
                      <li>• Programming experience (Python, PyTorch)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Postdoctoral Fellows</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Postdoctoral positions are available for researchers with expertise in deep learning, computer vision, or related fields.
                    </p>
                    <p className="text-sm font-medium">Requirements:</p>
                    <ul className="text-xs text-gray-700 space-y-1 mt-1">
                      <li>• Ph.D. in relevant field</li>
                      <li>• Publication record in top conferences</li>
                      <li>• Experience leading research projects</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Research Internships</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Summer internship opportunities for undergraduate and graduate students interested in gaining research experience.
                    </p>
                    <p className="text-sm font-medium">Requirements:</p>
                    <ul className="text-xs text-gray-700 space-y-1 mt-1">
                      <li>• Currently enrolled in CS degree program</li>
                      <li>• Coursework in ML and computer vision</li>
                      <li>• Coding proficiency</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700">
                    To apply, please send your CV, research statement, and relevant publications to: 
                    <a href="mailto:research-applications@example.edu" className="text-theme-blue font-medium ml-1">research-applications@example.edu</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Team;
