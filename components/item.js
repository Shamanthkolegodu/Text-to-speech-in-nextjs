import Image from "next/image";
import { ArcherElement } from "react-archer";

import { ItemType } from "../constants/itemTypes";

const boxStyle = {
	padding: "10px",
	marginTop: "15px",
	marginBottom: "15px",
	border: "1px solid black",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
};

/**
 * Item Components
 * It created all the ArcherElements and populates all the properties. It receives the relations from the MatchTheFollowingContainer.
 */
export default function Item({
	itemDetails,
	isLHS,
	onClickFunc,
	arrowDestination,
}) {
	/**
	 * This method transforms array of destination ids into JSON array of relations required for ArcherElement component.
	 *
	 * @param {Array of detination element ids} destArray
	 * @returns ArcherElement: Props: relations
	 */
	const getRelations = (destArray) => {
		let relations = [];
		if (destArray != undefined) {
			destArray.forEach(function (dest, index) {
				relations = [
					...relations,
					{
						targetId: dest,
						targetAnchor: "left",
						sourceAnchor: "right",
					},
				];
			});
		}

		return relations;
	};

	/**
	 * This method handles rendering DOM for different types for items
	 *
	 * @returns item DOM based on the type of item
	 */
	const getItemDOM = () => {
		switch (itemDetails.type) {
			case ItemType.TEXT:
				return itemDetails.text;
			case ItemType.IMAGE:
				if (itemDetails.imgSource) {
					return (
						<Image
							src={itemDetails.imgSource}
							alt="Unable to Load Image"
							width={50}
							height={50}
						/>
					);
				} else {
					return "Unable to Load Image";
				}
		}
	};

	if (isLHS) {
		return (
			<ArcherElement
				id={itemDetails.id}
				relations={getRelations(arrowDestination)}
			>
				<div
					id={itemDetails.id}
					style={boxStyle}
					onClick={() => onClickFunc(itemDetails.id)}
				>
					{getItemDOM()}
				</div>
			</ArcherElement>
		);
	} else {
		return (
			<ArcherElement id={itemDetails.id}>
				<div
					id={itemDetails.id}
					onClick={() => onClickFunc(itemDetails.id)}
					style={boxStyle}
				>
					{getItemDOM()}
				</div>
			</ArcherElement>
		);
	}
}
