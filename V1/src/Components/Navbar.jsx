import Box from "@mui/material/Box";
import LogoIcon from "../assets/logoIcon.svg?react";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/material";
import useScreenWidth from "../hooks/useScreenWidth";
function Navbar() {
  const screenWidth = useScreenWidth();

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
      }}
    >
      <Stack direction="row" spacing={14} sx={{ alignItems: "center" }}>
        <p
          style={{
            color: "#8531AB",
            fontWeight: "bold",
            fontSize: "26px",
            paddingLeft: "0.5rem",
          }}
        >
          Tomus
        </p>
        <LogoIcon
          style={{
            width: "60px",
            height: "60px",
            marginRight: screenWidth < 420 && "70px",
          }}
        />
        {screenWidth > 1025 && (
          <span>
            <Link sx={{ textDecoration: "none", color: "#8531ab" }}>
              About us
            </Link>
          </span>
        )}
      </Stack>
    </Box>
  );
}

export default Navbar;
