import ReactPlayer from "react-player";
import { Mic, MicOff, UserSquare2 } from "lucide-react";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;
  return (
    <div
      className={`relative overflow-hidden mb-5 h-full ${
        isActive ? "rounded-lg" : "rounded-md h-min w-[200px] shadow-lg"
      }`}
    >
      {playing ? (
        <ReactPlayer
          url={url}
          muted={muted}
          playing={playing}
          width="100%"
          height="100%"
        />
      ) : (
        <UserSquare2 className="text-white" size={isActive ? 400 : 150} />
      )}

      {!isActive ? (
        muted ? (
          <MicOff className="text-white absolute right-2 bottom-2" size={20} />
        ) : (
          <Mic className="text-white absolute right-2 bottom-2" size={20} />
        )
      ) : undefined}
    </div>
  );
};

export default Player;
