import VideoModal from "@/components/video-modal";
import ICourse from "@/types/ICourse";
import IVideo from "@/types/IVideo";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Course({ course }: { course: ICourse }) {
  const [video, setVideo] = useState<IVideo | null>(null)

  const handleVideoClick = (video: IVideo) => {
    setVideo(video)
  }

  const closeVideoModal = () => {
    setVideo(null)
  }

  return (
    <>
      <Head title="Curso" />

      <div className="flex flex-col items-center justify-center bg-gradient-to-bl from-indigo-600 to-cyan-500 text-white h-96 p-8">
        <h1 className="text-6xl mb-3 text-center max-w-2xl">{ course.title }</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mt-8 px-4 pb-4">
          <p className="text-md text-left">{ course.description }</p>

          <hr className="mt-4 border-gray-300" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-3xl text-center font-bold">Vídeos</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.videos.map((video) => (
            <div key={video.id} onClick={() => { handleVideoClick(video) }} className="cursor-pointer border border-gray-200 rounded-lg p-4 shadow-md">
              <h3 className="text-center font-bold text-xl mb-3">{ video.title }</h3>

              <video className="w-full aspect-video" style={{ maxHeight: '200px'}}>
                <source src={video.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>

      {video && <VideoModal video={video} onClose={closeVideoModal} />}
    </>
  )
}
