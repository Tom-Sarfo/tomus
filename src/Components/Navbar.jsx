import Box from "@mui/material/Box";
import LogoIcon from "../assets/logoIcon.svg?react";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/material";
import "../App.css";
import useScreenWidth from "../hooks/useScreenWidth";
import TomusIcon from "../../public/tomus-icon.png";

function Navbar() {
  const screenWidth = useScreenWidth();

  return (
    <nav>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#ffffff",
        }}
        className="nav"
      >
        <Stack
          direction="row"
          spacing={screenWidth < 340 ? 3 : screenWidth < 420 ? 6 : 14}
          sx={{ alignItems: "center" }}
        >
          <p
            style={{
              color: "#591a76",
              fontWeight: "bold",
              fontSize: "26px",
              paddingLeft: "0.5rem",
            }}
          >
            Tomus
          </p>
          {screenWidth < 420 ? (
            <img
              src="https://res.cloudinary.com/dki2r1gnf/image/upload/c_fill,w_1080,h_1080,ar_1:1/v1726555302/favicon_j0zse6.png"
              alt="Tomus footwear logo"
              style={{ height: "60px", width: "60px" }}
            />
          ) : (
            <LogoIcon
              style={{
                width: "60px",
                height: "60px",
                marginRight: screenWidth < 420 && "150px",
              }}
            />
          )}
          {screenWidth > 1025 && (
            <span>
              <Link sx={{ textDecoration: "none", color: "#591a76", fontWeight: 'bold' }}>
                About us
              </Link>
            </span>
          )}
        </Stack>
      </Box>
    </nav>
  );
}

export default Navbar;
