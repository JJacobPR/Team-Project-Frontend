import { Fragment } from "react";
import tipFormStyles from "./TipModal.module.css";
import ReactDOM from "react-dom";

const TipModal = (props) => {
  const HideModal = () => {
    props.onClick();
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
              defaultValue="Callout text..."
            />
            <input
              className={tipFormStyles.modal_input}
              type="text"
              defaultValue="Tip text..."
            />
          </div>
          <div className={tipFormStyles.modal_buttons}>
            <button className={tipFormStyles.modal_button}>Modify</button>
            <button className={tipFormStyles.modal_button}>Delete</button>
          </div>
        </form>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default TipModal;
