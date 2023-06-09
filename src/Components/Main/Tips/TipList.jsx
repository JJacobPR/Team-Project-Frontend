import { Fragment, useContext, useState } from "react";
import Tip from "./Tip";
import tipListStyles from "./TipList.module.css";
import TipModal from "./TipModal";
import NewTipTipModal from "./NewTipModal";

const TipList = (props) => {
  const [showModal, updateShowModal] = useState(false);
  const [showNewTipModal, updateShowNewTipModal] = useState(false);
  const [currentTip, updateCurrentTip] = useState();

  const toggleModal = (call, body) => {
    updateCurrentTip({ call, body });
    updateShowModal(!showModal);
  };

  const toggleNewTipModal = () => {
    updateShowNewTipModal(!showNewTipModal);
  };

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
      <div className={tipListStyles.add_button_wrapper}>
        <button
          onClick={toggleNewTipModal}
          className={tipListStyles.add_button}
        >
          Add Tip
        </button>
      </div>
      {showModal && (
        <TipModal
          onClick={toggleModal}
          curTip={currentTip}
          curId={props.currentRoomId}
        />
      )}
      {showNewTipModal && (
        <NewTipTipModal
          curId={props.currentRoomId}
          onClick={toggleNewTipModal}
        />
      )}
    </Fragment>
  );
};

export default TipList;
