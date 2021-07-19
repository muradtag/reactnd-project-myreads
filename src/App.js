import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./Views/Home";
import Search from "./Views/Search";
import { Route } from "react-router-dom";

const BooksApp = () => {
	const [books, setBooks] = useState([]);
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		BooksAPI.getAll().then((books) => {
			setBooks(books);
		});
	}, []);

	const upadateBookShelf = (book, shelf) => {
		const bookIndex = books.findIndex((index) => index.id === book.id);
		const newBookList = books;

		if (bookIndex === -1) {
			book.shelf = shelf;
			newBookList.push(book);
		} else {
			newBookList[bookIndex].shelf = shelf;
		}

		setBooks(newBookList);

		BooksAPI.update(book, shelf);
		setTrigger(!trigger);
	};

	return (
		<div className="app">
			<Route exact path="/">
				<Home books={books} upadateBookShelf={upadateBookShelf} />
			</Route>
			<Route exact path="/search">
				<Search storedBooks={books} upadateBookShelf={upadateBookShelf} />
			</Route>
		</div>
	);
};

export default BooksApp;
