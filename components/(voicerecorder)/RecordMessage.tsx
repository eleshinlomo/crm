import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: any;
};

export const RecordMessage = ({ handleStop }: Props) => {
  return (
     <div>
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="mt-2">
          <p className="mt-2 text-white font-light">{status}</p>
            
            
          
            
<div className="flex flex-1 justify-center items-center">
<button className="bg-black text-white p-4  rounded-full" 
onClick={startRecording}>Record</button>
<RecordIcon
              classText={
                status == "recording"
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
<button className="bg-black text-white p-4 rounded-full" 
onClick={stopRecording}>Stop</button>

</div>

          
        </div>
      )}
    />
   </div>
  );
};

export default RecordMessage;