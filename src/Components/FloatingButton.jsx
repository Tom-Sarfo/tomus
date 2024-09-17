import { Button } from "@mui/material";
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
    <Button
      variant="contained"
      href="https://tomuswear.company.site/products/"
      className="floating-button"
      onClick={onClick}
      sx={{
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        position: "fixed",
        backgroundColor: "#591a76",
        textTransform: "capitalize",
        color: "#ffffff",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {buttonText}
    </Button>
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
