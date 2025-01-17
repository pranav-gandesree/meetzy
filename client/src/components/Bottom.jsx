import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className="absolute flex justify-between bottom-5 left-0 right-0 mx-auto width-[300px]">
      {muted ? (
        <MicOff
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleAudio}
        />
      ) : (
        <Mic
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleAudio}
        />
      )}
      {playing ? (
        <Video
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleVideo}
        />
      ) : (
        <VideoOff
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff
        size={55}
        className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
        onClick={leaveRoom}
      />
    </div>
  );
};

export default Bottom;
