import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import "./Navigation/Styles/SwitchScreen.css";
import { Paper } from "@mui/material";

import DesktopNavBar from "./Navigation/desktopNavBar";
import MobileNavbar from "./Navigation/MobileNavBar";
import Category from "./HeroSection/CategorySection/Category";
import MainSection from "./HeroSection/MainSection";

function App() {
	return (
		<>
			<nav>
				<div className="DesktopNavBar">
					<DesktopNavBar />
				</div>

				<div className="MobileNavBar">
					<MobileNavbar />
				</div>
			</nav>
			<section className="HeroSection">
				<Paper elevation={1} className="HeroPaper">
					{/* Desktop Hero section */}
					<Category />
					<MainSection />
				{/* Mobile hero section */}
                    
				</Paper>
			</section>

			<div>Tomus is back</div>
		</>
	);
}

export default App;
