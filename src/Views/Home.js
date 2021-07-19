import React from "react";
import PropTypes from "prop-types";
import Title from "../Components/Title";
import Shelf from "../Components/Shelf";
import Fab from "../Components/Fab";

const Home = (props) => {
	Home.prototype = {
		books: PropTypes.array.isRequired,
		upadateBookShelf: PropTypes.func.isRequired,
	};

	return (
		<div className="list-books">
			<Title />
			<Shelf
				books={props.books.filter((book) => book.shelf === "currentlyReading")}
				title="Currently Reading"
				upadateBookShelf={props.upadateBookShelf}
			/>
			<Shelf
				books={props.books.filter((book) => book.shelf === "wantToRead")}
				title="Want to Read"
				upadateBookShelf={props.upadateBookShelf}
			/>
			<Shelf
				books={props.books.filter((book) => book.shelf === "read")}
				title="Read"
				upadateBookShelf={props.upadateBookShelf}
			/>
			<Fab />
		</div>
	);
};

export default Home;
