import { Fragment, useContext, useState } from "react";
import tipFormStyles from "./TipModal.module.css";
import ReactDOM from "react-dom";
import { RoomContext } from "../../Context/RoomsContext";

const NewTipTipModal = (props) => {
  const { addTip } = useContext(RoomContext);
  const [callInput, updateCallInput] = useState("...");
  const [bodyInput, updateBodyInput] = useState("...");
  const [tipSoundInput, updateTipSoundInput] = useState("...");

  const HideModal = () => {
    props.onClick();
  };

  const addHandler = (event) => {
    event.preventDefault();
    addTip(props.curId, callInput, bodyInput);
    props.onClick();
  };

  const bodyInputHandler = (e) => {
    updateBodyInput(e.target.value);
  };

  const callInputHandler = (e) => {
    updateCallInput(e.target.value);
  };

  const tipSoundHandler = (e) => {
    updateTipSoundInput(e.target.value);
    console.log(e.target.value);
  };

  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={HideModal} className={tipFormStyles.overlay}></div>
      <div className={tipFormStyles.modal}>
        <h2 className={tipFormStyles.modal_title}>Add Tip</h2>
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
          <input
            className={tipFormStyles.modal_input}
            type="file"
            id="soundFile"
            accept="audio/*"
            onChange={tipSoundHandler}
          />
          <div className={tipFormStyles.modal_buttons}>
            <button onClick={addHandler} className={tipFormStyles.modal_button}>
              Add
            </button>
          </div>
        </form>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default NewTipTipModal;
