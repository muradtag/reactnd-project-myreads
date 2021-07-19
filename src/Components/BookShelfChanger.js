import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = (props) => {
	BookShelfChanger.prototype = {
		bookItem: PropTypes.object.isRequired,
		upadateBookShelf: PropTypes.func.isRequired,
	};

	return (
		<div className="book-shelf-changer">
			<select
				value={props.bookItem.shelf ? props.bookItem.shelf : "none"}
				onChange={(e) => props.upadateBookShelf(props.bookItem, e.target.value)}
			>
				<option value="move" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

export default BookShelfChanger;
