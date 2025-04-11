
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import MethodologySection from "@/components/MethodologySection";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import BibTexSection from "@/components/BibTexSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AbstractSection />
      <ProblemStatementSection />
      <MethodologySection />
      <VideoSection />
      <TeamSection />
      <BibTexSection />
    </Layout>
  );
};

export default Index;
