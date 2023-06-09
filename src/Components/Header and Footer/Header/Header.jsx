import headerStyles from "./Header.module.css";
import ButtonHeader from "../../UI/ButtonHeader";
import headphoto from "../../../Assets/HeaderPhoto.png";
import Description from "./Description";

const Header = (props) => {
  return (
    <header>
      <div className={headerStyles.header_wrapper}>
        <div className={headerStyles.header}>
          <h1>Room Editor</h1>
          <div className={headerStyles.buttons}>
            <ButtonHeader btn_text={"Log Out"}></ButtonHeader>
            <ButtonHeader btn_text={"EN/PL"}></ButtonHeader>
          </div>
        </div>
      </div>
      <div className={headerStyles.image}>
        <img src={headphoto} alt="Header Escape Room" />
      </div>
      <Description />
    </header>
  );
};

export default Header;
