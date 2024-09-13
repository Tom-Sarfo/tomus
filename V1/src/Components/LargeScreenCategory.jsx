import Box from "@mui/material/Box";
import SquareCategory from "./SquareCategory";

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
        <SquareCategory />
        <SquareCategory />
        <SquareCategory />
      </div>
    </Box>
  );
}

export default LargeScreenCategory;
