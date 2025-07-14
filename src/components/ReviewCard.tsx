
import { Play, Mic, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  title: string;
  creator: string;
  duration: string;
  tags: string[];
  tipsEarned: number;
  thumbnail: string;
  transcript: string;
  isVideo: boolean;
}

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="absolute inset-0 flex items-center justify-center">
          {review.isVideo ? (
            <Play className="h-12 w-12 text-white bg-black/50 rounded-full p-3" />
          ) : (
            <Mic className="h-12 w-12 text-white bg-purple-500/80 rounded-full p-3" />
          )}
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {review.duration}
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {review.title}
        </h4>
        <p className="text-sm text-gray-600 mb-3">by {review.creator}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {review.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-600">
            <DollarSign className="h-4 w-4" />
            <span className="font-semibold">{review.tipsEarned.toFixed(2)}</span>
          </div>
          <Button size="sm" variant="outline" className="hover:bg-purple-50 hover:border-purple-200">
            Listen
          </Button>
        </div>
      </div>
    </div>
  );
};
