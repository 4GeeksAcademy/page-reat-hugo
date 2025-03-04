import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (<div class="container-fluid">
		<Navbar />
		<Jumbotron />
		<Cards />
		<Footer />
	</div>

	);
};

export default Home;