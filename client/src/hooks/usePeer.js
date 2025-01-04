import { useContext, useState, useEffect, useRef } from "react";
import { SocketContext } from "./context/socket"; 

const usePeer = (roomId) => {
  const socket = useContext(SocketContext); 
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const isPeerSet = useRef(false);

  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return;
    isPeerSet.current = true;

    let myPeer;
    (async function initPeer() {
      myPeer = new (await import("peerjs")).default();
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log(`Your peer ID is ${id}`);
        setMyId(id);
        socket?.emit("join-room", roomId, id);
      });
    })();
  }, [roomId, socket]);

  return {
    peer,
    myId,
  };
};

export default usePeer;
