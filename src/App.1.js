import ProductList from "./components/ProductList";
import data from './data.json';
import './App.css'
import { useState } from "react";
export default function App(){
const [order,setOrder] = useState('date');
const [items,setItmes] = useState(data);
// console.log(order);
// console.log(items);
//  26 - 36
const sortItems = items.sort((a,b) => b[order]-a[order]);
const bestClick = () => setOrder('rating');
const newClick = () => setOrder('date');
const DelectItem = (id) => {
// 새로운 배열
const newItem = items.filter((item) => item.id !== id)
setItmes(newItem);

}
  return (
    <div id="wrap">
      <div className="btn">
        <button
           type="button"
           onClick={newClick}>최신순</button>
        <button
           type="button"
           onClick={bestClick}>베스트순</button>
      </div>
      <ProductList 
      items={sortItems} 
      onDelete = {DelectItem} />
    </div>
  );
}


// 16 - 26