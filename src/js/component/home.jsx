import React, { Component, useState } from "react";
import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from './footer.jsx';

//include images into your bundle

//create your first component

const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container"> 
			<Jumbotron />
			<div className="row justify-content-around">
				<Card />
			</div>
			
		</div>
			<Footer />
		</>
	);
};

export default Home;
