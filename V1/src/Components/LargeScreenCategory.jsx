import Box from "@mui/material/Box";
import SquareCategory from "./SquareCategory";
import { squareCatMediaObject } from "../MediaObjects";

function LargeScreenCategory() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "15rem",
      }}
      className="large-screen-category"
    >
      <p style={{ fontWeight: "bold" }}>Shop by Category</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {squareCatMediaObject.map((mediaObject, index) => (
          <SquareCategory key={index} mediaObject={mediaObject} />
        ))}
      </div>
    </Box>
  );
}

export default LargeScreenCategory;
