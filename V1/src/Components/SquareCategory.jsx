import Box from "@mui/material/Box";
import Image from "../common/Image";
import { squareCatMediaObject } from "../MediaObjects";

function SquareCategory() {
  return (
    <Box
      sx={{
        width: "270px",
        height: "70px",
        backgroundColor: "#d9d9d9",
        margin: "1rem",
        borderRadius: "5px",
      }}
    >
      <Image mediaObject={squareCatMediaObject} style={{borderRadius: '20px'}} />
      <Box sx={{backgroundColor: '#ffffff', height: '100%', padding: '0.5rem', textAlign: 'left'}}>Birks</Box>
    </Box>
  );
}

export default SquareCategory;
