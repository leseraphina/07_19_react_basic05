import './ProductList.css'

function ListItem({item,onDelete}){
  function itemDate(value){
    const dday = new Date(value);
    // console.log(dday);
    return `${dday.getFullYear()}년 ${dday.getMonth() + 1}월 ${dday.getDate()}일`
  }
  return (
    <figure>
      <img src={item.image} alt={item.name} />
      <figcaption>
        <dl>
          <dt>{item.name}</dt>
          <dd>{item.price}</dd>
          <dd>{item.rating}</dd>
          <dd>{item.kind}</dd>
          <dd>{itemDate(item.date)}</dd>
          <dd>
            <button 
              type="button"
              onClick={() => onDelete(item.id)}>delete</button>
          </dd>
        </dl>
      </figcaption>
    </figure>
  );
 }


export default function ProductList({items,onDelete}){
  console.log(items);
  return (
    <ul>
    {items.map((item) => {
      return <li key={item.id}>
              <ListItem 
                item = {item}
                onDelete = {onDelete} />
              </li>
    })}
      </ul>
  );
}