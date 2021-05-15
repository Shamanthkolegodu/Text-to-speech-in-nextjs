import { ArcherContainer } from "react-archer";
import { useState } from "react";

import Item from "./item";

const rowStyle = {
	display: "flex",
	justifyContent: "space-between",
};

const columnStyle = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	width: "250px",
	padding: "15px",
	overflowY: "auto",
	height: "100%",
};

/**
 * MatchTheFollowingContainer
 * This the main parent container for rendering LHS and RHS
 */
export default function MatchTheFollowingContainer({ LHS, RHS }) {
	const [currentLHS, setCurrentLHS] = useState("");
	const [arrowDestMap, setArrowDestMap] = useState(new Map());

	const updateArrowDestination = (source, destination) => {
		let newDestList = arrowDestMap.get(source);

		if (newDestList == undefined) {
			newDestList = [destination];
		} else {
			/**
			 * There are 2 cases
			 *  1. Intent to add link
			 *      For this case, we assume if the destination is not already present then we will add it.
			 *  2. Intent to remove link
			 *      For this case, we assume if the destination alredy exist then we will remove it.
			 */
			if (newDestList.includes(destination)) {
				newDestList = newDestList.filter(
					(item) => item !== destination
				);
			} else {
				newDestList = [...newDestList, destination];
			}
		}
		setArrowDestMap(
			new Map(arrowDestMap.set(source, Array.from(new Set(newDestList))))
		);
	};

	const onClickLHS = (itemID) => {
		if (currentLHS) {
			console.log("Current LHS", currentLHS);
			document.getElementById(currentLHS).style.border =
				"1px solid black";
		}

		setCurrentLHS(itemID);

		document.getElementById(itemID).style.border = "2px solid red";
	};

	const onClickRHS = (itemID) => {
		updateArrowDestination(currentLHS, itemID);
	};

	return (
		<div>
			<ArcherContainer>
				<div style={rowStyle}>
					<div style={columnStyle}>
						{LHS.map((item) => (
							<Item
								key={item.id}
								itemDetails={item}
								isLHS={true}
								onClickFunc={onClickLHS}
								arrowDestination={arrowDestMap.get(item.id)}
							/>
						))}
					</div>
					<div style={columnStyle}>
						{RHS.map((item) => (
							<Item
								key={item.id}
								itemDetails={item}
								isLHS={false}
								onClickFunc={onClickRHS}
							/>
						))}
					</div>
				</div>
			</ArcherContainer>
		</div>
	);
}
