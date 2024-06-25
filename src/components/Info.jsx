import useravater from "../assets/avater.png";
import "./Style.css";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";
const Info = () => {
  const toLinkedin = () => {
    window.location.assign(
      "https://www.linkedin.com/in/achintha-prabasha-829894260/"
    );
  };

  return (
    <div className="info-container--">
      <div className="useravatar-container">
        <img src={useravater} alt="image of user" className="userimg--" />
      </div>
      <div className="title-container--">
        <h1 className="info--title">Achintha Prabasha</h1>
        <p>frontend developer</p>
        <a href="https://portfolio-achintha.pages.dev/" target="_blank">
          portfolio.website
        </a>
      </div>
      <div className="info--btn-container">
        <button>
          <HiEnvelope className="mail" />
          <p>email</p>
        </button>
        <button onClick={toLinkedin}>
          <FaLinkedin className="linkedin" />
          <p>linkedin</p>
        </button>
      </div>
    </div>
  );
};
export default Info;
