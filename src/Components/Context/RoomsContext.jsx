import React, { useReducer } from "react";

export const RoomContext = React.createContext([]);

const roomsDefaultState = [
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
];

const roomReducer = (state, action) => {
  let tipIndex;

  if (action.type === "DELETE") {
    state.forEach((element) => {
      if (element.id === +action.id)
        element.tips.forEach((tip, index) => {
          if (tip.tip_call === action.tip_call) {
            tipIndex = index;
          }
        });
    });
    state[+action.id].tips.splice(tipIndex, 1);
    return state;
  }

  if (action.type === "MODIFY") {
    state.forEach((element) => {
      if (element.id === +action.id)
        element.tips.forEach((tip, index) => {
          if (tip.tip_call === action.former_tip_call) {
            tipIndex = index;
          }
        });
    });

    state[+action.id].tips[tipIndex].tip_body = action.new_body;
    state[+action.id].tips[tipIndex].tip_call = action.new_call;
    return state;
  }

  if (action.type === "ADD") {
    state[+action.id].tips.push({
      tip_body: action.new_body,
      tip_call: action.new_call,
    });

    return state;
  }

  return state;
};

const RoomProvider = (props) => {
  const [roomsState, dispatchRoomFunction] = useReducer(
    roomReducer,
    roomsDefaultState
  );

  const rooms = {
    rooms: roomsState,
    deleteTip: (id, tip_call) => {
      dispatchRoomFunction({ type: "DELETE", id: id, tip_call: tip_call });
    },
    modifyTip: (id, former_tip_call, new_call, new_body) => {
      dispatchRoomFunction({
        type: "MODIFY",
        id: id,
        former_tip_call: former_tip_call,
        new_call: new_call,
        new_body: new_body,
      });
    },

    addTip: (id, new_call, new_body) => {
      dispatchRoomFunction({
        type: "ADD",
        id: id,
        new_call: new_call,
        new_body: new_body,
      });
    },
  };

  return (
    <RoomContext.Provider value={rooms}>{props.children}</RoomContext.Provider>
  );
};

export default RoomProvider;
