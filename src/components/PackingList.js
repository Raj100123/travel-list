import { useState } from "react";
import  Item  from "./Item";

export  default function PackingList({ items, onDeleteItems, onToggleItem, onclearList }) {

  const [sortBy, setSortBy] = useState("description");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sorts by Input Order</option>
          <option value="description">Sorts by Description </option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button onClick={onclearList}>Clear List</button>
      </div>
    </div>
  );
}
