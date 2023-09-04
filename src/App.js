import { useEffect, useState } from "react";
import Header from "./Components/Header"
import Product from "./Components/Product"
import product from "./product.json"
import "./index.css"
import Basket from "./Components/Basket";
function App() {
  const [Money,SetMoney]= useState(1000000);
  const [basket,SetBasket]= useState([]);
  const [total,setTotal] = useState(0);
  const resetBasket =()=>{
    SetBasket([])
  }
  useEffect(()=>{

   setTotal( basket.reduce((acc,item)=>{
        return acc + (item.amount*(product.find(product=>product.id === item.id).price))
    },0))

  },[basket])

  return (
    <>
      <Header total={total} money = {Money}/>
      <div className="container products">
      {product.map(product =>(
        <Product key={product.id} total={total} money={Money} basket={basket} SetBasket={SetBasket} product={product}/>

      ))}
      </div>
       {total > 0 && (
          <Basket resetBasket={resetBasket} total={total} products={product} basket={basket}/>
       )} 
      </>
  );
}

export default App;
