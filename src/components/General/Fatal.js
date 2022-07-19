import Logo404 from "../../svg/error-1349562.svg";
import "../../css/fatal.css";

const Fatal = (props) => (
  <div className="Fatal">
    <h1 className="FatalMessage">{props.message}</h1>
    <img className="FatalLogo" src={Logo404} alt="React Logo" />
  </div>
);

export default Fatal;
