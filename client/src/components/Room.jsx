// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Copy, Video, VideoOff } from 'lucide-react';
// import { io } from 'socket.io-client';

// const Room = () => {
//   const { roomId } = useParams();
//   const navigate = useNavigate();
//   const [isCopied, setIsCopied] = useState(false);
//   const [isVideoEnabled, setIsVideoEnabled] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const socketRef = useRef(io('http://localhost:3001'));

//   useEffect(() => {
//     if (!roomId) {
//       navigate('/');
//       return;
//     }

//     // Connect to socket
//     const socket = socketRef.current;
//     socket.emit('join-room', roomId);

//     // Get video stream
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       })
//       .catch((error) => {
//         console.error('Error accessing media devices:', error);
//       });

//     return () => {
//       socket.disconnect();
//     };
//   }, [roomId, navigate]);

//   const copyRoomId = () => {
//     navigator.clipboard.writeText(roomId || '');
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 2000);
//   };

//   const toggleVideo = () => {
//     if (videoRef.current?.srcObject) {
//       const stream = videoRef.current.srcObject;
//       const videoTrack = stream.getVideoTracks()[0];
//       videoTrack.enabled = !videoTrack.enabled;
//       setIsVideoEnabled(!isVideoEnabled);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col">
//       <div className="flex-1 p-4">
//         <div className="relative max-w-2xl mx-auto aspect-video bg-black rounded-lg overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             playsInline
//             muted
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="bg-gray-800 p-4">
//         <div className="max-w-2xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-300">Room ID: {roomId}</span>
//             <button
//               onClick={copyRoomId}
//               className="p-2 hover:bg-gray-700 rounded-full transition-colors"
//               title="Copy room ID"
//             >
//               <Copy className="w-5 h-5 text-gray-300" />
//             </button>
//             {isCopied && (
//               <span className="text-green-400 text-sm">Copied!</span>
//             )}
//           </div>

//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleVideo}
//               className={`p-3 rounded-full ${
//                 isVideoEnabled ? 'bg-gray-700' : 'bg-red-500'
//               }`}
//             >
//               {isVideoEnabled ? (
//                 <Video className="w-6 h-6 text-white" />
//               ) : (
//                 <VideoOff className="w-6 h-6 text-white" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Room;



import React from 'react'

const Room = () => {
  return (
    <div>
      room id
    </div>
  )
}

export default Room
