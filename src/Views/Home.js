import React from "react";
import Title from "../Components/Title";
import Shelf from "../Components/Shelf";
import Fab from "../Components/Fab";

const Home = () => {
	return (
		<div className="list-books">
			<Title />
			<Shelf />
			<Fab />
		</div>
	);
};

export default Home;
