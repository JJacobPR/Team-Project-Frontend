import React from "react";

export const RoomContext = React.createContext([]);

const RoomProvider = (props) => {
  const rooms = {
    rooms: [
      {
        id: 0,
        name: "Crime Scene",
        tips: [
          { tip_body: "Get over here", tip_call: "John" },
          { tip_body: "Time to die", tip_call: "Ciri" },
        ],
      },
      {
        id: 1,
        name: "FairyTale",
        tips: [
          { tip_body: "Apples and meat", tip_call: "Wolf" },
          { tip_body: "Nothing Important", tip_call: "Donkey" },
          { tip_body: "Get out of my Swamp", tip_call: "Shrek" },
        ],
      },
    ],
  };

  return (
    <RoomContext.Provider value={rooms}>{props.children}</RoomContext.Provider>
  );
};

export default RoomProvider;
