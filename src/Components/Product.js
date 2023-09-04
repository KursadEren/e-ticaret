import {moneyFormat} from "./helpers" 
function Product({money,total,product,basket,SetBasket}){
    
    const basketItem = basket.find(item => item.id === product.id )

    const addBasket = ()=>{
       const checkbBasket = basket.find(item => item.id ===product.id)
       if(checkbBasket){
            checkbBasket.amount +=1
            SetBasket([...basket.filter(item=>item.id !== product.id) ,checkbBasket])
       }
       else {
        SetBasket([...basket ,{
            id:product.id,
            amount:1
        }])
       }
    }

    const removeBasket = () =>{
        const checkbBasket = basket.find(item => item.id ===product.id)
        checkbBasket.amount -=1
        const basketWithoutCurrent = basket.filter(item=>item.id !== product.id)
       if(checkbBasket.amount===0){
            
            SetBasket([...basketWithoutCurrent])
       }
       else {
        SetBasket([...basketWithoutCurrent , checkbBasket])
       }
    } 

    return(
        <div className="product">
            <div className="image">
                <img src={product.image} alt=""/>
            </div>
        <h6>{product.title}</h6>
        <div className="price">${product.price}</div>
        <div className="actions">
            <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
            <span className="amount"> {basketItem && basketItem.amount || 0} </span>
            <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Satın al</button>
            
        </div>
        <style jsx>{`
        .image{
            width:90%;
            height:150px;
        }
        .product{
            width:calc(25%-15px);
            padding:15px;
            background:#fff;
            border: 1px solid #ddd;
            margin-bottom:20px;
            flex:1;
            margin-top:10px;
        }
        .product img{
            width:100%;
            flex:1;
        }
        .product h6 {
            font-size:20px;
            margin-bottom:10px;
        }
        .product .price{
            font-size:20px;
            color:#179b17;
        }
        .product .actions{
            margin-top:15px;
            display:flex;
            align-items:center;

        }
        .actions button[disabled]{
            opacity: .3;
            cursor:not allowed;
        }
        .actions button {
            height:40px;
            padding:0 15px;
            flex:1;
            cursor:pointer;
        }
        .actions .amount{
            width:50px;
            text-align:center;
            border: 1px solid #ddd;
            height:40px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:17px;
            font-weight:bold;
            color:#555;
        }
        .actions .buy-btn{
            background:#61dafb;
            font-size:12px;
            font-weight:500;
            border-radius:0 4px 4px 0;
        }
        .actions .sell-btn{
            background:#61dafb;
            font-size:12px;
            color:#333;
            font-weight:500;
            border-radius: 4px 0 0 4px;
        }
        `}</style>
        </div>
       
    )
}
export default Product