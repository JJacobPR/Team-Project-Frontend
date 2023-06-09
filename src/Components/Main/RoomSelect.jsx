import DropDownSvg from "../../Assets/Dropdownsvg";
import selectStyles from "./RoomSelect.module.css";
import Option from "../UI/Option";
import { Fragment, useEffect, useState } from "react";
import TipList from "./Tips/TipList";

const RoomSelect = (props) => {
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

  return (
    <Fragment>
      <section className={selectStyles.form_section}>
        <h2 className={selectStyles.form_title}>Choose Room to modify</h2>
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
      </section>
      <TipList
        currentRoomTips={selectedRoom.tips}
        currentRoomId={selectedRoom.id}
      />
    </Fragment>
  );
};

export default RoomSelect;
