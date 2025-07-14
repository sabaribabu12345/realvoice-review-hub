
import { Button } from "@/components/ui/button";
import { Mic, Video, Star, TrendingUp } from "lucide-react";

interface HeroProps {
  onUploadClick: () => void;
}

export const Hero = ({ onUploadClick }: HeroProps) => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
          Your Voice Matters
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Share authentic spoken reviews and discover genuine insights from real people. 
          Get rewarded for helpful reviews that guide others in their decisions.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Button 
            onClick={onUploadClick}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
          >
            <Mic className="h-5 w-5 mr-2" />
            Start Recording
          </Button>
          <Button 
            onClick={onUploadClick}
            variant="outline" 
            size="lg"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            <Video className="h-5 w-5 mr-2" />
            Upload Video
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200">
            <Star className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-lg font-semibold mb-2">Authentic Reviews</h3>
            <p className="text-gray-600">Share your real experiences through voice and video</p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">Earn Tips</h3>
            <p className="text-gray-600">Get rewarded when your reviews help others</p>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200">
            <Mic className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Easy Discovery</h3>
            <p className="text-gray-600">Find reviews by tags, keywords, and categories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
