import React, { useState } from "react";

function Item({ name, category }) {

  const [added, setAdded] = useState(true)

  function handleAdd() {
    setAdded(!added)
  }

  return (
    <li className={added ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={added ? "add" : "remove"} onClick={handleAdd}>Add to Cart</button>
    </li>
  );
}

export default Item;
