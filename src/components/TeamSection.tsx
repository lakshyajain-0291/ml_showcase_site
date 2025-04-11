
import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  links: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, links }) => {
  return (
    <Card className="paper-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-theme-blue font-medium text-sm mb-3">{role}</p>
          <p className="text-gray-700 text-sm mb-4">
            {bio}
          </p>
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
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Dr. John Smith",
      role: "Principal Investigator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800",
      bio: "Expert in computer vision and machine learning with 10+ years of experience in developing state-of-the-art retrieval systems.",
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
      bio: "Specializes in transformer architectures and self-supervised learning. Published 15+ papers in top-tier ML conferences.",
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
      bio: "Systems architect focusing on efficient implementations of large-scale retrieval engines and distributed computing.",
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
      bio: "Researcher in visual attention mechanisms and multimodal learning. Previously interned at Google Research.",
      links: {
        email: "sarah.davis@example.edu",
        linkedin: "https://linkedin.com/in/sarahdavis",
        github: "https://github.com/sarahdavis"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Research Team" 
          subtitle="Meet the people behind the project"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="paper-shadow">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Acknowledgements</h3>
              <p className="text-gray-700 mb-6">
                This research was supported by grants from the National Science Foundation (NSF-1234567) and the University Research Foundation. We extend our gratitude to the following organizations and individuals for their support:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Computational Resources</h4>
                  <p className="text-sm text-gray-700">
                    We acknowledge the University Computing Center for providing access to their high-performance computing clusters, which were essential for training our models.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Dataset Access</h4>
                  <p className="text-sm text-gray-700">
                    We thank the Visual Data Research Group for providing access to their proprietary dataset, which was crucial for the evaluation of our approach.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Academic Collaborators</h4>
                  <p className="text-sm text-gray-700">
                    Special thanks to Dr. Michael Chen and Dr. David Brown for their valuable feedback and insightful discussions throughout the project.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
