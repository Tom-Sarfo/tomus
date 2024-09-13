import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import "../App.css";

function ProductCard({ imgUrl, productName, price, instock, newArrival }) {
  return (
    <Box sx={{ marginBottom: "15px" }} className="product-card-container">
      <Box className="product-card">{/* <Image /> */}</Box>
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
  imgUrl: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  instock: PropTypes.bool,
  newArrival: PropTypes.bool,
};

export default ProductCard;
