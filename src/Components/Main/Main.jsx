import RoomSelect from "./RoomSelect";

const Main = (props) => {
  return (
    <main>
      <RoomSelect data={props.data} />
    </main>
  );
};

export default Main;
