import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import "./Footer-styles.css";
const Footer = () => {
  return (
    <ul>
      <li>
        <a href="https://x.com/PrabashAch10994" target="_blank">
          <AiFillTwitterSquare />
        </a>
      </li>
      <li>
        <a href="https://web.facebook.com/achintha.prabash.336" target="_blank">
          <AiFillFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/achintha0110/" target="_blank">
          <AiFillInstagram />
        </a>
      </li>
      <li>
        <a href="https://github.com/AchinthaPrabash3" target="_blank">
          <AiFillGithub />
        </a>
      </li>
    </ul>
  );
};
export default Footer;
