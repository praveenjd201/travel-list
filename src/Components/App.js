import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Packinglist from "./Packinglist";
import Stats from "./Stats";

const initialItems = [];

function App() {
  const [items, setItems] = useState(initialItems); //lift state up to first common parent

  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(itemid) {
    setItems((items) => items.filter((item) => item.id !== itemid));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearlist() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAdditems} />
      <Packinglist
        items={items}
        onUpdateitem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearlist={handleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
