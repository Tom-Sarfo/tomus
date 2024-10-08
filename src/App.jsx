import Box from "@mui/material/Box";
import "./App.css";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import LargeScreenCategory from "./Components/LargeScreenCategory";
import useScreenWidth from "./hooks/useScreenWidth";
import { productMediaObject } from "./MediaObjects";
import { Button } from "@mui/material";
// import ComingSoon from "./ComingSoon";

function App() {
  const screenWidth = useScreenWidth();

  return (
    <>
      <Navbar />
      <Banner />
      {/* <HeroText /> */}
      {screenWidth > 1024 ? <LargeScreenCategory /> : <Category />}

      <h2
        style={{
          paddingLeft: "1rem",
          fontWeight: "bold",
          textAlign: screenWidth > 1024 && "center",
        }}
      >
        Hot picks
      </h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "4px",
          padding: "10px",
        }}
      >
        {productMediaObject.map((mediaObject, index) => (
          <ProductCard
            key={index}
            productName="Nsaa"
            price="$500.00"
            mediaObject={mediaObject}
          />
        ))}
      </Box>
      <center style={{ padding: "1rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#591a76",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#8531ab" },
            "&:focus": { outline: "none" },
          }}
          href="https://tomuswear.company.site/products/"
          onClick={() => {}}
        >
          View more
        </Button>
      </center>
      {/* <ComingSoon /> */}
    </>
  );
}

export default App;
