import React from "react";
// import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./Views/Home";
import Search from "./Views/Search";
import { Route } from "react-router-dom";

const BooksApp = () => {
	return (
		<div className="app">
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/search">
				<Search />
			</Route>
		</div>
	);
};

export default BooksApp;
