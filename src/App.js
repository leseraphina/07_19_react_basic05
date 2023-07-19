import ProductList from "./components/ProductList_1";
import data from './data.json';
import './App.css'
import { useState } from "react";
function Option({etc,sortItems}){
  const etcChange = (e) => {
    return sortItems(e.target.value);
  }
  return (
    <select
     defaultValue={etc}
     onChange={etcChange}>
      <option value="necklaces">necklaces</option>
      <option value="earrings">earrings</option>
    </select>
  )
}

export default function App(){
const [etc,setEtc] = useState('');
const [items,setItems] = useState(data);
//  변수 만들기
let subData = data;
console.log(subData);
 
const sortItems = (a) =>{
  console.log(a)
  const newItem = subData.filter((item) => {return item.kind === a});
  console.log(newItem);
  setEtc(a);
  setItems(newItem)
}

const DelectItem = (id) => {
// 새로운 배열
const newItem = items.filter((item) => item.id !== id)
setItems(newItem);

}
  return (
    <div id="wrap">
      <div className="btn">
        <Option etc={etc} sortItems={sortItems} />
      </div>
      <ProductList 
      items={items} 
      onDelete = {DelectItem} />
    </div>
  );
}


// 16 - 26