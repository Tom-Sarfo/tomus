import "../App.css";
import PropTypes from "prop-types";
const HeroText = ({
  text1 = "African ",
  text2 = " the embodiment of craft",
}) => {
  return (
    <div className="hero-text">
      <h1>
        <b style={{ color: "#591a76" }}>{text1}</b>-{text2}
      </h1>
    </div>
  );
};
HeroText.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
};
export default HeroText;
