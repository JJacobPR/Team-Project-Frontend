import FooterStyles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <span className={FooterStyles.text}>
        Team Project 2022/2023 &emsp; &emsp;
      </span>
      <span className={FooterStyles.text}>Enigma Squad ©</span>
    </footer>
  );
};

export default Footer;
