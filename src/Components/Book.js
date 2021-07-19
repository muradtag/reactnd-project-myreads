import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = (props) => {
	Book.prototype = {
		bookItem: PropTypes.object.isRequired,
		upadateBookShelf: PropTypes.func.isRequired,
	};

	return (
		<li key={props.bookItem.id}>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage:
								props.bookItem.imageLinks &&
								props.bookItem.imageLinks.smallThumbnail
									? `url(${props.bookItem.imageLinks.smallThumbnail})`
									: "none",
						}}
					/>
					<BookShelfChanger
						bookItem={props.bookItem}
						upadateBookShelf={props.upadateBookShelf}
					/>
				</div>
				<div className="book-title">{props.bookItem.title}</div>
				<div className="book-authors">
					{props.bookItem.authors && props.bookItem.authors.length > 1
						? props.bookItem.authors.join(", ")
						: props.bookItem.authors}
				</div>
			</div>
		</li>
	);
};

export default Book;
