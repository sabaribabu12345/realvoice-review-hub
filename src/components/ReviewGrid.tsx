
import { ReviewCard } from "@/components/ReviewCard";

// Mock data for demonstration
const mockReviews = [
  {
    id: "1",
    title: "Amazing Coffee Shop in Downtown",
    creator: "Sarah Johnson",
    duration: "2:45",
    tags: ["coffee", "downtown", "ambiance"],
    tipsEarned: 12.50,
    thumbnail: "/placeholder.svg",
    transcript: "This coffee shop has the most amazing atmosphere...",
    isVideo: true
  },
  {
    id: "2",
    title: "Budget Gaming Laptop Review",
    creator: "Tech Mike",
    duration: "5:20",
    tags: ["tech", "gaming", "budget", "laptop"],
    tipsEarned: 28.75,
    thumbnail: "/placeholder.svg",
    transcript: "For under $800, this laptop delivers surprising performance...",
    isVideo: false
  },
  {
    id: "3",
    title: "Local Italian Restaurant Gem",
    creator: "Foodie Emma",
    duration: "3:15",
    tags: ["food", "italian", "restaurant", "local"],
    tipsEarned: 19.25,
    thumbnail: "/placeholder.svg",
    transcript: "Hidden in a small alley, this place serves the best pasta...",
    isVideo: true
  },
  {
    id: "4",
    title: "Fitness Tracker Comparison",
    creator: "Healthy Living",
    duration: "4:30",
    tags: ["fitness", "health", "wearable", "comparison"],
    tipsEarned: 35.00,
    thumbnail: "/placeholder.svg",
    transcript: "After testing 5 different fitness trackers for 3 months...",
    isVideo: false
  }
];

export const ReviewGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-800">Trending Reviews</h3>
        <div className="flex space-x-2">
          {["All", "Tech", "Food", "Travel", "Local"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};
