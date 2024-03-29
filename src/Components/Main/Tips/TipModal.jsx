import { Fragment, useContext, useState } from "react";
import tipFormStyles from "./TipModal.module.css";
import ReactDOM from "react-dom";
import { RoomContext } from "../../Context/RoomsContext";

const TipModal = (props) => {
  const { rooms, deleteTip, modifyTip } = useContext(RoomContext);
  const [callInput, updateCallInput] = useState(props.curTip.call);
  const [bodyInput, updateBodyInput] = useState(props.curTip.body);

  const HideModal = () => {
    props.onClick();
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteTip(props.curId, props.curTip.call);
    props.onClick();
  };

  const modifyHandler = (event) => {
    event.preventDefault();
    modifyTip(props.curId, props.curTip.call, callInput, bodyInput);
    props.onClick();
  };

  const bodyInputHandler = (e) => {
    updateBodyInput(e.target.value);
  };

  const callInputHandler = (e) => {
    updateCallInput(e.target.value);
  };

  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={HideModal} className={tipFormStyles.overlay}></div>
      <div className={tipFormStyles.modal}>
        <h2 className={tipFormStyles.modal_title}>Edit Tip</h2>
        <form className={tipFormStyles.modal_form}>
          <div className={tipFormStyles.modal_inputs}>
            <input
              className={tipFormStyles.modal_input}
              type="text"
              value={callInput}
              onChange={callInputHandler}
            />
            <input
              className={tipFormStyles.modal_input}
              type="text"
              defaultValue={bodyInput}
              onChange={bodyInputHandler}
            />
          </div>
          <div className={tipFormStyles.modal_buttons}>
            <button
              onClick={modifyHandler}
              className={tipFormStyles.modal_button}
            >
              Modify
            </button>
            <button
              onClick={deleteHandler}
              className={tipFormStyles.modal_button}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default TipModal;
