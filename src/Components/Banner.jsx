import Box from "@mui/material/Box";
import Image from "../common/Image";
import { bannerMediaObject } from "../MediaObjects";
import FloatingButton from "./FloatingButton";
import HeroText from "./HeroText";

function Banner() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: '50px'
      }}
    >
      <Image mediaObject={bannerMediaObject} />
      <FloatingButton buttonText="Shop Now"/>
      <HeroText />
    </Box>
  );
}

export default Banner;
