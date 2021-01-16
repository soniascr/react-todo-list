import React from "react";
import List from "./list";
import PropTypes from "prop-types";

//create your first component
export function Home() {
	return (
		<div className="list text-center">
			<h1 className="display-4">todos</h1>
			<List />
		</div>
	);
}

List.popTypes = {
	newElement: PropTypes.string
};
