import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = (props) => {
	Shelf.prototype = {
		books: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
	};

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.books.map((book) => (
						<Book key={book.id} bookItem={book} />
					))}
				</ol>
			</div>
		</div>
	);
};

export default Shelf;
