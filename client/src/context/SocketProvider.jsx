import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
   
    const connection = io("http://localhost:8000"); 
    console.log("socket connection", connection);
    setSocket(connection);

    connection.on('connect_error', async (err) => {
      console.log("Error establishing socket", err);
      // Optionally handle the error, for example, reconnect logic or show an error message
    });

    return () => {
      connection.disconnect(); 
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
