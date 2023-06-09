import buttonStyles from "./ButtonHeader.module.css";

const ButtonHeader = (props) => {
  return (
    <button className={buttonStyles.button_header}>{props.btn_text}</button>
  );
};

export default ButtonHeader;
