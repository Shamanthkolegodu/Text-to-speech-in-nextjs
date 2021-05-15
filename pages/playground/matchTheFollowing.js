/**
 * Assumption:
 * LHS and RHS list do not change at runtime
 *
 * State Variables:
 * 1. To keep track of current selection
 * 2. LHS Individual Item  = [ destination ids ]
 *
 * Components:
 * 1. Main Layout: Stacks: LHS and RHS
 * 2. Individual Lists Items Containers
 *      a. Image
 *      b. Text
 *      c. Math Equations
 *      d. Audio Clips
 *
 * Functionality:
 * 1. Auto Jumble - each rendering
 * 2. Check Sanity of the input: LHS, RHS
 */

import MatchTheFollowingContainer from "../../components/matchTheFollowingContainer";
import { ItemType } from "../../constants/itemTypes";

const LHS = [
  {
    id: "111",
    type: ItemType.TEXT,
    text: "Tiger",
  },
  {
    id: "222",
    type: ItemType.TEXT,
    text: "Lion",
  },
  {
    id: "333",
    type: ItemType.TEXT,
    text: "Elephant",
  },
  {
    id: "444",
    type: ItemType.TEXT,
    text: "Zebra",
  },
  {
    id: "555",
    type: ItemType.TEXT,
    text: "Monkey",
  },
];

const RHS123 = [
  {
    id: "aaa",
    type: ItemType.TEXT,
    text: "Tiger",
  },
  {
    id: "bbb",
    type: ItemType.TEXT,
    text: "Lion",
  },
  {
    id: "ccc",
    type: ItemType.TEXT,
    text: "Elephant",
  },
  {
    id: "ddd",
    type: ItemType.TEXT,
    text: "Zebra",
  },
  {
    id: "fff",
    type: ItemType.TEXT,
    text: "Monkey",
  },
];

const RHS = [
  {
    id: "aaa",
    type: ItemType.IMAGE,
    imgSource:
      "https://images.freeimages.com/images/large-previews/66d/tiger-1388270.jpg",
  },
  {
    id: "bbb",
    type: ItemType.IMAGE,
    imgSource:
      "https://images.freeimages.com/images/large-previews/3e1/elephant-1361859.jpg",
  },
  {
    id: "ccc",
    type: ItemType.IMAGE,
    imgSource:
      "https://images.freeimages.com/images/large-previews/6c9/lion-1402323.jpg",
  },
  {
    id: "ddd",
    type: ItemType.IMAGE,
    imgSource:
      "https://images.freeimages.com/images/large-previews/f41/zebra-1393530.jpg",
  },
];

export default function matchTheFollowing() {
  return <MatchTheFollowingContainer LHS={LHS} RHS={RHS} />;
}
