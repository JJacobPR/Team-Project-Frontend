import { Fragment, useState } from "react";
import Tip from "./Tip";
import tipListStyles from "./TipList.module.css";
import TipModal from "./TipModal";

const TipList = (props) => {
  const [showModal, updateShowModal] = useState(false);

  const toggleModal = () => {
    updateShowModal(!showModal);
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
      {showModal && <TipModal onClick={toggleModal} />}
    </Fragment>
  );
};

export default TipList;
