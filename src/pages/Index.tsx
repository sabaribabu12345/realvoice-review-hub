
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReviewGrid } from "@/components/ReviewGrid";
import { UploadModal } from "@/components/UploadModal";

const Index = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header onUploadClick={() => setIsUploadModalOpen(true)} />
      <Hero onUploadClick={() => setIsUploadModalOpen(true)} />
      <ReviewGrid />
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
