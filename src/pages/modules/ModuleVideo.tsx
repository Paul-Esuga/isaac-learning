import videoFile from "../../assets/audio/video.mp4"

function ModuleVideo() {
  return (
    <div className='z-[30000]  overflow-y-scroll h-[70vh] pb-10'>
      <h1>Video Files</h1>
      <div className='p-2.5 bg-transparent rounded-[10px]'>
        {/* <audio controls src={audioFile} className="w-full bg-white" ></audio> */}
        <video src={videoFile} controls color="red"></video>
      </div>

    </div>
  )
}

export default ModuleVideo