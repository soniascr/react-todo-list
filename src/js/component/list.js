import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

let List = props => {
	let [items, setItems] = useState([
		{ id: 1, name: "Make the bed" },
		{ id: 2, name: "Wash my hands" }
	]);
	let [inputValue, setInputValue] = useState("");

	useEffect(
		function(element) {
			if ((inputValue != "") & (items.length > 0)) {
				setItems(
					items.concat({
						id: items[items.length - 1].id + 1,
						name: inputValue
					})
				);
			}
		},
		[inputValue]
	);

	return (
		<div className="container">
			<ul className="list-group m-3">
				<li className="list-group-item">
					<input
						value={inputValue}
						placeholder={"What needs to be done?"}
						onChange={e => setInputValue(e.target.value)}
					/>
				</li>
				{items.map((item, index) => (
					<li className="list-group-item" key={item.id}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};
export default List;
