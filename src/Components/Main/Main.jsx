import { useContext } from "react";
import RoomSelect from "./RoomSelect";
import { RoomContext } from "../Context/RoomsContext";

const Main = () => {
  const { rooms } = useContext(RoomContext);
  return (
    <main>
      <RoomSelect data={rooms} />
    </main>
  );
};

export default Main;
