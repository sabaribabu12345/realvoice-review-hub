
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Mic, Video, X } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [viewType, setViewType] = useState<'paid' | 'free'>('free');
  const [price, setPrice] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!title || !file) return;
    // Mock upload logic
    console.log("Uploading:", { title, tags, file, viewType, price });
    onClose();
    // Reset form
    setTitle("");
    setTags("");
    setFile(null);
    setViewType('free');
    setPrice('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Share Your Review
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium">
              Review Title
            </Label>
            <Input
              id="title"
              placeholder="What are you reviewing?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="tags" className="text-sm font-medium">
              Tags (comma separated)
            </Label>
            <Input
              id="tags"
              placeholder="e.g. coffee, downtown, cozy"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label className="text-sm font-medium">Access Type</Label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="viewType" value="free" checked={viewType === 'free'} onChange={() => setViewType('free')} />
                Free to View
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="viewType" value="paid" checked={viewType === 'paid'} onChange={() => setViewType('paid')} />
                Pay to View
              </label>
            </div>
            {viewType === 'paid' && (
              <div className="mt-2">
                <Label htmlFor="price" className="text-sm font-medium">Price ($)</Label>
                <Input id="price" type="number" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} className="mt-1" />
              </div>
            )}
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            {file ? (
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  {file.type.startsWith('video/') ? (
                    <Video className="h-8 w-8 text-purple-600" />
                  ) : (
                    <Mic className="h-8 w-8 text-purple-600" />
                  )}
                  <span className="font-medium">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFile(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="h-12 w-12 mx-auto text-gray-400" />
                <div>
                  <p className="text-gray-600 mb-2">
                    Drop your audio or video file here, or
                  </p>
                  <input
                    type="file"
                    accept="audio/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <Button variant="outline" className="mr-2">
                      Browse Files
                    </Button>
                  </Label>
                  <Button
                    variant="outline"
                    onClick={() => setIsRecording(!isRecording)}
                    className={isRecording ? "bg-red-50 border-red-200" : ""}
                  >
                    <Mic className="h-4 w-4 mr-2" />
                    {isRecording ? "Stop Recording" : "Record Now"}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!title || !file}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Upload Review
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
