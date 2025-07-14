import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const MediaModal = ({ review, onClose }: { review: any, onClose: () => void }) => {
  if (!review) return null;
  return (
    <Dialog open={!!review} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{review.title}</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img src={review.avatar} alt="avatar" className="w-8 h-8 rounded-full mr-2 border-2 border-purple-200" />
            <span className="font-semibold text-gray-700">{review.creator}</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {review.tags.map((tag: string, i: number) => (
              <span key={tag} className={`px-2 py-1 text-xs rounded-full ${["bg-purple-50 text-purple-600","bg-blue-50 text-blue-600","bg-green-50 text-green-600"][i%3]}`}>#{tag}</span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          {review.isVideo ? (
            <video src={review.mediaUrl} controls className="w-full rounded-lg" poster={review.thumbnail} />
          ) : (
            <audio src={review.mediaUrl} controls className="w-full" />
          )}
        </div>
        <div className="text-gray-600 text-sm mb-2">
          <strong>Transcript:</strong> {review.transcript}
        </div>
      </DialogContent>
    </Dialog>
  );
}; 