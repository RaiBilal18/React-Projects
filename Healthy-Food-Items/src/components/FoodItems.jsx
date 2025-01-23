import { useState } from "react";
import Item from "./Item";

let FoodItems = ({ fooditems }) => {
  let [activeItems, setactiveitems] = useState([]);
  let Managebuybutton = (event, item) => {
    let newitems = [...activeItems, item];
    setactiveitems(newitems);
  };
  return (
    <ul className="list-group dwidth">
      {fooditems.map((item) => {
        return (
          <Item
            key={item}
            item={item}
            bought={activeItems.includes(item)}
            HandleBuybutton={(event) => {
              Managebuybutton(event, item);
            }}
          />
        );
      })}
    </ul>
  );
};

export default FoodItems;
