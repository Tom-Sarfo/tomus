import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import "../App.css";
import Image from "../common/Image";

function ProductCard({ mediaObject, productName, price, instock, newArrival }) {
  return (
    <Box sx={{ marginBottom: "15px" }} className="product-card-container">
      <Box className="product-card">
        {mediaObject && <Image mediaObject={mediaObject} />}
      </Box>
      <div className="product-caption">
        <p style={{ marginBlockStart: "0px", fontWeight: "bold" }}>
          {productName}
        </p>
        <p>{price}</p>
      </div>
    </Box>
  );
}

ProductCard.propTypes = {
  mediaObject: PropTypes.object,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  instock: PropTypes.bool,
  newArrival: PropTypes.bool,
};

export default ProductCard;
