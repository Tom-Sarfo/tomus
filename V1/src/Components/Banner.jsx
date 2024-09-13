import Box from "@mui/material/Box";
import Image from "../common/Image";
import { bannerMediaObject } from "../MediaObjects";
import FloatingButton from "./FloatingButton";

function Banner() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Image mediaObject={bannerMediaObject} />
      <FloatingButton buttonText="Shop Now"/>
    </Box>
  );
}

export default Banner;
