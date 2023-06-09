import { Fragment } from "react";
import EditIcon from "../../../Assets/EditIcon";
import tipStyles from "./Tip.module.css";

const Tip = (props) => {
  return (
    <Fragment>
      <li className={tipStyles.tip}>
        <div className={tipStyles.desc}>
          <p>Tip Callout: Hey, {props.call_text}!</p>
          <p>Tip Content: {props.main_text}</p>
        </div>
        <div>
          <button
            onClick={props.onClick}
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
