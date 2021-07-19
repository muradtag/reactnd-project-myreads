import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Book from "../Components/Book";
import { DebounceInput } from "react-debounce-input";

const Search = (props) => {
	Search.prototype = {
		upadateBookShelf: PropTypes.func.isRequired,
		storedBooks: PropTypes.array.isRequired,
	};

	const [query, setQuery] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const updateQuery = (query) => {
		setQuery(query);

		BooksAPI.search(query).then((searchResult) => {
			if (searchResult && searchResult.length > 0) {
				for (const result of searchResult) {
					for (const book of props.storedBooks) {
						if (result.id === book.id) {
							result.shelf = book.shelf;
						}
					}
				}
			}
			setSearchResult(searchResult);
		});
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<DebounceInput
						debounceTimeout={300}
						type="text"
						placeholder="Search by title or author"
						value={query}
						onChange={(e) => updateQuery(e.target.value)}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{searchResult && searchResult.length > 0 ? (
						searchResult.map((book) => (
							<Book
								key={book.id}
								bookItem={book}
								upadateBookShelf={props.upadateBookShelf}
							/>
						))
					) : (
						<div />
					)}
				</ol>
			</div>
		</div>
	);
};

export default Search;
