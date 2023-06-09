import { Fragment, useContext, useState } from "react";
import Tip from "./Tip";
import tipListStyles from "./TipList.module.css";
import TipModal from "./TipModal";
import { RoomContext } from "../../Context/RoomsContext";

const TipList = (props) => {
  const [showModal, updateShowModal] = useState(false);
  const [currentTip, updateCurrentTip] = useState();

  const toggleModal = (call, body) => {
    updateCurrentTip({ call, body });
    updateShowModal(!showModal);
  };

  const deleteTip = (call) => {};

  const tipList = props.currentRoomTips.map((obj) => (
    <Tip
      call_text={obj.tip_call}
      main_text={obj.tip_body}
      key={Math.random()}
      onClick={toggleModal}
    />
  ));

  return (
    <Fragment>
      <ul className={tipListStyles.list}>{tipList}</ul>
      {showModal && (
        <TipModal
          onClick={toggleModal}
          onDelete={deleteTip}
          curTip={currentTip}
        />
      )}
    </Fragment>
  );
};

export default TipList;
