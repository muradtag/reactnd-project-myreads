import React, { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Title from "../Components/Title";
import Shelf from "../Components/Shelf";
import Fab from "../Components/Fab";

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		BooksAPI.getAll().then((books) => {
			setBooks(books);
		});
	}, []);

	return (
		<div className="list-books">
			<Title />
			<Shelf
				books={books.filter((book) => book.shelf === "currentlyReading")}
				title="Currently Reading"
			/>
			<Shelf
				books={books.filter((book) => book.shelf === "wantToRead")}
				title="Want to Read"
			/>
			<Shelf
				books={books.filter((book) => book.shelf === "read")}
				title="Read"
			/>
			<Fab />
		</div>
	);
};

export default Home;
