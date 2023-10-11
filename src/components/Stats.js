export default function Stats({ items }) {
  if (!items.length) return (<p className="stats"> Start adding some items to your packing List🚀</p>);
  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You got everything!Ready to go ✈"
          : `you have ${numItems} items on your list and you already packed ${numPacked} items (${percentage} %`}

      </em>
    </footer>

  );
}
