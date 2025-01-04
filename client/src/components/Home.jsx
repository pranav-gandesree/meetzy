import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Plus } from 'lucide-react';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const createAndJoinRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 7);
    navigate(`/room/${newRoomId}`);
  };


  const joinRoom = (e) => {
    e.preventDefault();
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }else {
        alert("Please provide a valid room id")
      }
  };



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-400">
        <div className="flex items-center justify-center mb-8">
          <Video className="w-12 h-12 text-blue-500" />
          <h1 className="text-2xl font-bold ml-2">Meet Clone</h1>
        </div>

        <form onSubmit={joinRoom} className="space-y-4">
          <div>
            <label htmlFor="roomId" className="block text-sm font-medium text-gray-400">
              Room ID
            </label>
            <input
              type="text"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border bg-transparent"
              placeholder="Enter room ID"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Join Room
          </button>
        </form>

        <div className="mt-4 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <button
          onClick={createAndJoinRoom}
          className="mt-4 w-full flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New Room
        </button>
      </div>
    </div>
  );
};

export default Home;