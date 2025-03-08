import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import { details } from "./array/dataAtribute";

//create your first component
const Home = () => {
	
	
       return(
		<>
		<Navbar />
		<Jumbotron />
<div className="cards">
		{
			details.map(values => {
				console.log(values)
				console.log(values.id)
				return (
				<Cards key={values.id} name={values.name} image={values.image}/>
			
			)
			})

		}
</div>
		<Footer />
	</>
	)

};

export default Home;