export default function Stats({ item }) {
  if (!item.length) return <footer className="stats"> <em> Start adding Item in your Packing List😊</em></footer>;
  const numitem = item.length;
  const packeditem = item.filter(item => item.packed === true).length;
  const percentage = Math.round((packeditem / numitem) * 100);

  return <footer className="stats">
    <em> {percentage === 100 ? 'You have Done Now ready to Fly ✈️' : `💼 You have ${numitem} in your List and you already packed ${packeditem} (${percentage}%)`}</em>
  </footer>;

}
