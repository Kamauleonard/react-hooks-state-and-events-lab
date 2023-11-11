import {useState} from "react";


function Item({ name, category }) {

  const [selected, setSelected] = useState(false)

function removeSelected(){
  setSelected((selected)=> !selected)
}

const isInCart = selected ? "in-cart" : ""

const color =  selected ? "remove" : "add"

  return (
    <li className={isInCart }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={removeSelected} className={color} >{selected ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
