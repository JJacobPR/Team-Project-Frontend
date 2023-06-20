import { Fragment } from "react";
import EditIcon from "../../../Assets/EditIcon";
import tipStyles from "./Tip.module.css";

const Tip = (props) => {
  const onClickHandler = () => {
    props.onClick(props.call_text, props.main_text);
  };

  return (
    <Fragment>
      <li className={tipStyles.tip}>
        <div className={tipStyles.desc}>
          <p>Tip Callout: {props.call_text}</p>
          <p>Tip Content: {props.main_text}</p>
        </div>
        <div>
          <button
            onClick={onClickHandler}
            className={tipStyles.button_edit}
            type="button"
          >
            <EditIcon />
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default Tip;
