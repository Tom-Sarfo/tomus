import "../App.css";
import PropTypes from "prop-types";
const HeroText = ({ text = "African - the embodiment of craft" }) => {
  return (
    <div className="hero-text">
      <h1>{text}</h1>
    </div>
  );
};
HeroText.propTypes = {
  text: PropTypes.string,
};
export default HeroText;
