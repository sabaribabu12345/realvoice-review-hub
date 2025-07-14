
import { ReviewCard } from "@/components/ReviewCard";
import { useState } from "react";
import { MediaModal } from "@/components/MediaModal";

// Demo media URLs
const demoMedia = [
  {
    id: "1",
    title: "Relaxing Jazz Music",
    creator: "Sarah Johnson",
    duration: "2:45",
    tags: ["music", "jazz", "relax"],
    tipsEarned: 12.5,
    thumbnail: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&w=400",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    transcript: "Enjoy this relaxing jazz music for your study or work session.",
    isVideo: false,
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: "2",
    title: "City Timelapse",
    creator: "Tech Mike",
    duration: "1:20",
    tags: ["city", "timelapse", "video"],
    tipsEarned: 28.75,
    thumbnail: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=400",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    transcript: "A beautiful timelapse of a bustling city.",
    isVideo: true,
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "3",
    title: "Nature Sounds for Sleep",
    creator: "Foodie Emma",
    duration: "3:15",
    tags: ["nature", "sleep", "audio"],
    tipsEarned: 19.25,
    thumbnail: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&w=400",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    transcript: "Soothing nature sounds to help you sleep.",
    isVideo: false,
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: "4",
    title: "Mountain Adventure Vlog",
    creator: "Healthy Living",
    duration: "4:30",
    tags: ["adventure", "mountain", "vlog"],
    tipsEarned: 35.0,
    thumbnail: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=400",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    transcript: "Join me on a mountain adventure!",
    isVideo: true,
    mediaUrl: "https://www.w3schools.com/html/movie.mp4"
  }
];

export const ReviewGrid = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-800">Trending Reviews</h3>
        <div className="flex space-x-2">
          {["All", "Music", "City", "Nature", "Adventure"].map((tag) => (
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
        {demoMedia.map((review) => (
          <ReviewCard key={review.id} review={review} onListen={() => setSelectedReview(review)} />
        ))}
      </div>
      <MediaModal review={selectedReview} onClose={() => setSelectedReview(null)} />
    </section>
  );
};
