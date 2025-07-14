
import { Play, Mic, DollarSign, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Review {
  id?: string;
  _id?: string;
  title: string;
  creator: string;
  duration: string;
  tags: string[];
  tipsEarned: number;
  thumbnail: string;
  avatar: string;
  transcript: string;
  isVideo: boolean;
  mediaUrl: string;
  viewType?: 'paid' | 'free';
  price?: number;
  tips?: { amount: number; from: string }[];
}

interface ReviewCardProps {
  review: Review;
  onListen: () => void;
  hasPurchased?: boolean; // mock for now
}

const mockTips = [
  { amount: 2, from: "Alice" },
  { amount: 5, from: "Bob" },
  { amount: 1, from: "Charlie" },
];

export const ReviewCard = ({ review, onListen, hasPurchased }: ReviewCardProps) => {
  const [liked, setLiked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const isPaid = review.viewType === 'paid';
  const canView = !isPaid || hasPurchased;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100">
        <img src={review.thumbnail} alt="thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-80" />
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
        {isPaid && !canView && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="text-white text-lg font-semibold">Pay ${review.price?.toFixed(2) || 0} to View</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src={review.avatar} alt="avatar" className="w-8 h-8 rounded-full mr-2 border-2 border-purple-200" />
          <h4 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {review.title}
          </h4>
        </div>
        <p className="text-sm text-gray-600 mb-3">by {review.creator}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {review.tags.slice(0, 3).map((tag, i) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs rounded-full ${["bg-purple-50 text-purple-600","bg-blue-50 text-blue-600","bg-green-50 text-green-600"][i%3]}`}
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
          <div className="flex items-center gap-2">
            {isPaid && !canView ? (
              <Button size="sm" variant="outline" className="hover:bg-purple-50 hover:border-purple-200" onClick={() => alert('Mock: Pay flow')}>Pay ${review.price?.toFixed(2) || 0}</Button>
            ) : (
              <Button size="sm" variant="outline" className="hover:bg-purple-50 hover:border-purple-200" onClick={onListen}>
                {review.isVideo ? "Watch" : "Listen"}
              </Button>
            )}
            {(!isPaid || canView) && (
              <Button size="sm" variant="outline" className="hover:bg-green-50 hover:border-green-200" onClick={() => alert('Mock: Tip flow')}>Tip</Button>
            )}
            <button onClick={() => setLiked(l => !l)} className={`ml-2 ${liked ? "text-red-500" : "text-gray-400"}`} aria-label="Like">
              <Heart className="h-5 w-5" fill={liked ? "#ef4444" : "none"} />
            </button>
          </div>
        </div>
        {(!isPaid || canView) && (
          <div className="mt-2 text-xs text-gray-500">
            <span className="font-semibold">Recent Tips: </span>
            {(review.tips && review.tips.length > 0 ? review.tips : mockTips).map((tip, i) => (
              <span key={i} className="mr-2">${tip.amount} from {tip.from}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
