import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: any;
};

export const RecordMessage = ({ handleStop }: Props) => {
  return (
     <div className="w-full flex flex-col justify-center items-center ">
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="">
          
            
            
          
            
<div className="flex flex-col   justify-center items-center md:mr-72">
<p className=" text-white font-light">{status}</p>
<div className="flex   justify-center items-center">
<button className="bg-blue-900 text-white p-4 rounded-full" 
onClick={startRecording}>Start</button>
<RecordIcon
              classText={
                status == "recording"
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
<button className="bg-blue-900 text-white p-4 rounded-full" 
onClick={stopRecording}>Stop</button>
</div>

</div>

          
        </div>
      )}
    />
   </div>
  );
};

export default RecordMessage;