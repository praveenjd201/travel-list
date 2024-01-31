export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        Start adding some items to you packing list 🚀
      </footer>
    );
  }
  const no_of_items = items.length;
  const packed_count = items.filter((item) => item.packed).length;
  const percent_packed = Math.round((packed_count / no_of_items) * 100);
  console.log(packed_count);

  return (
    <footer className="stats">
      {percent_packed === 100
        ? "You got everything! Ready to go ✈️"
        : `You have ${no_of_items} items on your list, and you already packed ${packed_count} (${percent_packed}%)`}
    </footer>
  );
}
