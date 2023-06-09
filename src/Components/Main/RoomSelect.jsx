import { Fragment } from "react";

const RoomSelect = () => {
  return (
    <Fragment>
      <h2>Choose Room to modify</h2>
      <form>
        <label htmlFor="rooms">Rooms:</label>
        <select id="rooms" name="room">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </form>
    </Fragment>
  );
};

export default RoomSelect;
