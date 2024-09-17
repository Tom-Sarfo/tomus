import "../App.css";
import PropTypes from "prop-types";

const FloatingButton = ({
  buttonText,
  onClick,
  top = "10px",
  right = "10px",
  left,
  bottom,
}) => {
  return (
    <button
      className="floating-button"
      onClick={onClick}
      style={{
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        position: 'fixed'
      }}
    >
      {buttonText}
    </button>
  );
};

FloatingButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
};

export default FloatingButton;
