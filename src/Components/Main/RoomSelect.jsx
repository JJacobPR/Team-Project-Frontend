import DropDownSvg from "../../Assets/Dropdownsvg";
import selectStyles from "./RoomSelect.module.css";
import Option from "../UI/Option";
import { Fragment, useContext, useEffect, useState } from "react";
import TipList from "./Tips/TipList";
import { RoomContext } from "../Context/RoomsContext";

const RoomSelect = (props) => {
  const { rooms } = useContext(RoomContext);

  const [roomSelect, updateRoomSelect] = useState(props.data);
  const [selectedRoom, updateSelectedRoom] = useState(props?.data[0]);

  useEffect(() => {
    updateRoomSelect(props.data);
  }, [props.data]);

  const options = roomSelect.map((room, index) => (
    <Option text={room.name} value={index} key={index} />
  ));

  const updateSelectedRoomHandler = (event) => {
    const selectedRoom = props.data.find(
      (room) => room.id === +event.target.value
    );

    updateSelectedRoom(selectedRoom);
  };

  const submitDataHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://rooms.example/presentation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rooms),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Fragment>
      <section className={selectStyles.form_section}>
        <h2 className={selectStyles.form_title}>Choose Room to modify</h2>
        <div className={selectStyles.forms}>
          <form className={selectStyles.form}>
            <select
              onChange={updateSelectedRoomHandler}
              className={selectStyles.form_select}
              id="rooms"
              name="room"
            >
              {options}
            </select>
            <div className={selectStyles.icon_wrapper}>
              <DropDownSvg />
            </div>
          </form>
          <form id="myForm">
            <button
              type="submit"
              onClick={submitDataHandler}
              className={selectStyles.btn_submit}
            >
              Submit Changes
            </button>
          </form>
        </div>
      </section>

      <TipList
        currentRoomTips={selectedRoom.tips}
        currentRoomId={selectedRoom.id}
      />
    </Fragment>
  );
};

export default RoomSelect;
