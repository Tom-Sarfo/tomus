import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import "../App.css";
import Image from "../common/Image";
import Chip from "@mui/material/Chip";


function ProductCard({ mediaObject }) {
  return (
    <a href="https://tomuswear.company.site/products/" className="product-link">
      <Box sx={{ marginBottom: "15px" }} className="product-card-container">
        {mediaObject.newArrival && (
          <Chip
            label="hot"
            sx={{
              position: "absolute",
              zIndex: 10,
              marginTop: "6px",
              marginLeft: "6px",
              backgroundColor: "#FF0000",
              color: "white",
            }}
            size="small"
          />
        )}

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
    </a>
  );
}

ProductCard.propTypes = {
  mediaObject: PropTypes.object,
  instock: PropTypes.bool,
  newArrival: PropTypes.bool,
};

export default ProductCard;
