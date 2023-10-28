import { Card, CardMedia } from "@mui/material";

export default function SecondDiscovery() {
	return (
		<div className="SecondDiscCard">
			<Card className="SecondDiscInner">
				<CardMedia
					component="img"
					height="500"
					image="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355320469.jpg"
					alt="Birk Slippers"
                    className="firstDiscImg"
				/>
                <CardMedia
					component="img"
					height="500"
					image="https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/3355370088.jpg"
					alt="Birk Slippers"
                    className="secondDiscImg"
				/>
			</Card>
		</div>
	);
}
