
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
              <span className="text-xs font-medium text-gray-500 uppercase">Learnings</span>
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
            
            {/* <div>
                <span className="text-xs font-medium text-gray-500 uppercase">Roll No</span>
                <p className="text-sm font-medium">{publications}</p>
            </div> */}

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase">Age</span>
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
      name: "Aradhya Mahajan",
      role: "ML Developer & Backened Engineer",
      image: "../../photos/aradhya.jpg?fit=crop&w=800&h=800",
      bio: "Aradhya developed the complete backend infrastructure for capturing live network packets, enabling real-time intrusion detection in the NIDS project. Additionally, he implemented the Nearest Centroid Classifier, contributing to the exploration of lightweight yet effective classification techniques.",
      publications: 19,
      expertise: ["Live Packet Capture Backend", "Nearest Centroid Classifier", "Network Data Handling", "Backend Integration"],
      education: "B. Tech in Computer Science, IIT Jodhpur",
      links: {
        email: "b23cs1088@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/aradhya-mahajan/",
        github: "https://github.com/aradhya2708"
      }
    },
    {
      name: "Arpan Jain",
      role: "Model Trainer",
      image: "../../photos/arpan.png",
      bio: "Arpan played a pivotal role in implementing the Single Layer Perceptron (SLP) and Multi-Layer Perceptron (MLP) models for the NIDS project. Through his dedicated learning and hands-on implementation, he significantly contributed to the model development, enhancing its performance.",
      publications: 21,
      expertise: ["Neural Networks", "Single Layer Perceptron (SLP)", "Multi-Layer Perceptron (MLP)"],
      education: "B. Tech in Computer Science, IIT Jodhpur",
      links: {
        email: "b23cs1089@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/arpan2048/",
        github: "https://github.com/bot2048"
      }
    },
    {
      name: "Divyansh Maheshwari",
      role: "AI Workflow Engineer",
      image: "../../photos/divyansh.png",
      bio: "Divyansh served as the primary AI lead for the NIDS project, driving the machine learning pipeline from data preprocessing to model training. He was responsible for thorough data cleaning and exploratory data analysis (EDA), and implemented both the Decision Tree and Random Forest models.",
      publications: 19,
      expertise: ["Data Cleaning & Feature Engineering", "Exploratory Data Analysis (EDA)", "Decision Tree Implementation", "Random Forest Training"],
      education: "B. Tech in Artifical Intelligence and Data Science, IIT Jodhpur",
      links: {
        email: "b23cm1015@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/divyansh-maheshwari/",
        github: "https://github.com/divyansh1010x"
      }
    },
    {
      name: "Mohit Meemrauth",
      role: "ML Implementation Associate",
      image: "../../photos/mohit.png?fit=crop&w=800&h=800",
      bio: "Mohit contributed to the NIDS project by implementing the Linear Discriminant Analysis (LDA) classifier and assisting in the feature extraction process. His involvement in identifying and engineering relevant attributes helped streamline the dataset for more effective model training. Mohit's hands-on work with LDA added a valuable statistical perspective to the model evaluation pipeline.",
      publications: 19,
      expertise: ["Linear Discriminant Analysis (LDA)", "Feature Extraction", "Statistical Analysis"],
      education: "B. Tech in Computer Science, IIT Jodhpur",
      links: {
        email: "b23cs1038@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/mohit-meemrauth-40772828b/",
        github: "https://github.com/Mohi1038"
      }
    },
    {
      name: "Lakshya Jain",
      role: "Full-Stack & ML Contributor",
      image: "../../photos/lakshya.jpg?fit=crop&w=800&h=800",
      bio: "Lakshya contributed to both the web development and machine learning components of the NIDS project. He developed the project’s website, ensuring a user-friendly interface and seamless accessibility. Additionally, he implemented the Naive Bayes classifier, enhancing the diversity of the evaluated models and supporting the comparative analysis.",
      publications: 21,
      expertise: ["Naive Bayes Implementation", "Model Evaluation Support", "Project Website Development"],
      education: "B. Tech in Computer Science, IIT Jodhpur",
      links: {
        email: "b23cs1032@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/lakshya-jain-5b565a284/",
        github: "https://github.com/lakshyajain-0291"
      }
    },
    {
      name: "Vyom Shah",
      role: "ML Contributor & Documentation",
      image: "../../photos/vyom.png?fit=crop&w=800&h=800",
      bio: "Vyom made key contributions to the NIDS project by implementing the Logistic Regression model and taking complete ownership of the project documentation. His work ensured both the technical depth and clarity of the report, making the project presentation-ready for academic evaluation.",
      publications: 21,
      expertise: ["Logistic Regression", "Project Documentation", "Technical Writing"],
      education: "B. Tech in Artifical Intelligence and Data Science, IIT Jodhpur",
      links: {
        email: "b23cm1058@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/shah-vyom/",
        github: "https://github.com/Vyom1111"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Meet the talented people behind the NIDS project.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="core" className="w-full">          
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
