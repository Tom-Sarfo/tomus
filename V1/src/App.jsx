import Box from "@mui/material/Box";
import "./App.css";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import LargeScreenCategory from "./Components/LargeScreenCategory";
import useScreenWidth from "./hooks/useScreenWidth";
import HeroText from "./Components/HeroText";

function App() {
  const screenWidth = useScreenWidth();

  return (
    <>
      <Navbar />
      <Banner />
      <HeroText />
      {screenWidth > 1024 ? <LargeScreenCategory /> : <Category />}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "4px",
          padding: "10px",
        }}
      >
        <ProductCard productName="Nsaa" price="$500.00" />
        <ProductCard productName="Nsaa" price="$500.00" />
        <ProductCard productName="Nsaa" price="$500.00" />
        <ProductCard productName="Nsaa" price="$500.00" />
      </Box>
    </>
  );
}

export default App;
