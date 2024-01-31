import { useState } from "react";
import Item from "./Item";

export default function Packinglist({
  items,
  onUpdateitem,
  onToggleItem,
  onClearlist,
}) {
  const [sortby, setSortby] = useState("input");
  let sorted;
  if (sortby === "input") {
    sorted = items;
  }

  if (sortby === "description") {
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortby === "packed") {
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            onUpdateitem={onUpdateitem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">sort by input items</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status </option>
        </select>
        <button onClick={onClearlist}>clear list</button>
      </div>
    </div>
  );
}
