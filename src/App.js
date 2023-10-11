import { useState } from "react";
import Logo from "./Logo"
import Form from "./Form"
import PackingList  from "./PackingList";
import Item from "./Item";
import  Stats  from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 2, description: "Charger", quantity: 1, packed: true },
// ];


export default function App(){
  const [items, setItems]= useState([])
  function handleAdditems(item){
    setItems((items)=>[...items,item])
}
  function handleDeleteItem(id){
    console.log(id);
    console.log(items);
    setItems((i)=>i.filter((item)=>item.id !== id));
    console.log(setItems);
  }

  function handleToggleItem(id){

    console.log(items);
    setItems((items)=>items.map((item)=>item.id===id?{...item,packed:!item.packed}:item))
   console.log(items);
    
  }
 
  function handleClearList(){
    const confirmed=window.confirm('Are you sure you want to delete all items?');
    if(confirmed) setItems([]);
  }
  return <div className="app">
    <Logo/>
    <Form onAdditems={handleAdditems} />
    <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItem={handleToggleItem} onclearList={handleClearList} />
    <Stats items={items}/>
    </div>
  
}




