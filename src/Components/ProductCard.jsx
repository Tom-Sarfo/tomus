import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import "../App.css";
import Image from "../common/Image";

function ProductCard({ mediaObject, instock, newArrival }) {
  return (
    <Box sx={{ marginBottom: "15px" }} className="product-card-container">
      <Box className="product-card">
        {mediaObject && <Image mediaObject={mediaObject} />}
      </Box>
      <div className="product-caption">
        <p style={{ marginBlockStart: "0px", fontWeight: "bold" }}>
          {mediaObject.imageName}
        </p>
        <p>${mediaObject.price}</p>
      </div>
    </Box>
  );
}

ProductCard.propTypes = {
  mediaObject: PropTypes.object,
  instock: PropTypes.bool,
  newArrival: PropTypes.bool,
};

export default ProductCard;
