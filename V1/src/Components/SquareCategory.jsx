import Box from "@mui/material/Box";
import Image from "../common/Image";
import PropTypes from 'prop-types';

function SquareCategory({mediaObject}) {
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
      <Image mediaObject={mediaObject} style={{borderRadius: '20px'}} />
      <Box sx={{backgroundColor: '#ffffff', height: '100%', padding: '0.5rem', textAlign: 'left'}}>{mediaObject.imageName}</Box>
    </Box>
  );
}

SquareCategory.propTypes = {
  mediaObject: PropTypes.object,
};

export default SquareCategory;
