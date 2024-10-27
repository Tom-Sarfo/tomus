import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PropTypes from "prop-types";

function TestimonialCard({imgName, cardText }) {
  return (
    <Card sx={{ maxWidth: "100%", marginTop: "80px", height: "700px" }}>
      <CardActionArea>
        {/* <CardMedia component="img" height={700} image={imgUrl} alt={imgName} /> */}
        <CardContent sx={{padding: '1rem' }}>
          <Typography gutterBottom variant="h5" component="div">
           {imgName}
          </Typography>
          <Typography  sx={{ color: "text.secondary", fontStyle: 'italic', fontSize: '20px', lineHeight: '50px' }}>
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

TestimonialCard.propTypes = {
  imgUrl: PropTypes.string,
  imgName: PropTypes.string,
  cardText: PropTypes.string,
};

export default TestimonialCard;
