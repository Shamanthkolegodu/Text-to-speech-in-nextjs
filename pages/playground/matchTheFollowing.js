import arrayMove from 'array-move';
import Head from "next/head";
import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';


const SortableItem = SortableElement(({ value }) =>
  <li className="SortableItem">{value}</li>
);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul className="SortableList">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class MatchTheFollowing extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return (
      <span>
        <Head>
          <title>Match The Following</title>
        </Head>
        <h1 className="title">Match The Following</h1>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} helperClass="SortableHelper" />
      </span>
    );
  }
}

export default MatchTheFollowing
