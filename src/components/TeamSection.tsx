
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
      name: "Aradhya Mahajan",
      role: "ML Developer & Backend Engineer",
      image: "../../photos/aradhya.jpg",
      bio: "Second Year Undergrad, enthusiastic about Backend development, Blockchain and Cryptography.",
      links: {
        email: "b23cs1088@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/aradhya-mahajan/",
        github: "https://github.com/aradhya2708"
      }
    },
    {
      name: "Arpan Jain",
      role: "Model Trainer",
      image: "../../photos/arpan.png?fit=crop&w=800&h=800",
      bio: "Second year undergrad, expert in CP and passionate about Blockchain and Development",
      links: {
        email: "b23cs1089@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/arpan2048/",
        github: "https://github.com/bot2048"
      }
    },
    {
      name: "Divyansh Maheshwari",
      role: "AI Workflow Engineer",
      image: "../../photos/divyansh.png?fit=crop&w=800&h=800",
      bio: "Second Year Undergrad, and an aspiring back end developer. Passionate about AI and its applications.",
      links: {
        email: "b23cm1015@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/divyansh-maheshwari/",
        github: "https://github.com/divyansh1010x"
      }
    },
    {
      name: "Mohit Meemrauth",
      role: "ML Contributor",
      image: "../../photos/mohit.png?fit=crop&w=800&h=800",
      bio: "Second Year Undergrad at IIT Jodhpur with a strong interest in backend development and DevOps",
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
      bio: "A student in the Class of 2027 at IIT Jodhpur in the CSE branch, with a keen and growing interest in technology and entrepreneurship.",
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
      bio: "Second Year Undergrad, passionate about Quantitative Finance, Data Science and Machine Learning.",
      links: {
        email: "b23cm1058@iitj.ac.in",
        linkedin: "https://www.linkedin.com/in/shah-vyom/",
        github: "https://github.com/Vyom1111"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet the people behind the project"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center place-items-center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="paper-shadow">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-theme-blue">Acknowledgements</h3>
              <p className="text-gray-700 mb-6">
                This research was performed as a course project in the Indian Institute of Technology, Jodhput (IITJ). We extend our gratitude to the following organizations and individuals for their support:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Computational Resources</h4>
                  <p className="text-sm text-gray-700">
                    We utilized Google Colab for model training and experimentation. The access to free cloud-based GPUs provided an efficient and accessible platform for developing and testing our models.                  
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Dataset Access</h4>
                  <p className="text-sm text-gray-700">
                    The dataset used for the project was sourced from Kaggle, offering a rich resource that enabled us to develop and evaluate our network intrusion detection system.                  
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Academic Support</h4>
                  <p className="text-sm text-gray-700">
                    This research was completed as part of a course project. We thank our course instructor Prof. Anand Mishra for their insightful feedback, support, and encouragement during the development of the NIDS system.                  
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
