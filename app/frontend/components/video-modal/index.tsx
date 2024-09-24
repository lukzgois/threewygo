import IVideo from "@/types/IVideo";
import { MouseEventHandler } from "react";

export default function VideoModal({
  video,
  onClose = () => {},
}: { video: IVideo, onClose?: MouseEventHandler }) {
  return (
    <>
      <div className="fixed top-52 z-20 flex items-center justify-center w-full">
        <div className="p-4 w-full max-w-5xl max-h-full">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 text-center">
              <video className="w-full aspect-video" controls autoPlay>
                <source src={video.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 flex justify-center items-center pt-20 w-full md:inset-0 h-[calc(100%)] max-h-full bg-gray-900/75"
        onClick={onClose}
      ></div>
    </>
  )
}
