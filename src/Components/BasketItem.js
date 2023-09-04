import React from 'react'

export default function BasketItem({item,product}) {
  return (
    <>
      <li className='basket-item'>
        {product.title} x <span>{item.amount}</span>
      </li>

      <style jsx>{`
      
      .basket-item{
        padding-battom:10px;
        font-size:17px;
      }
      .basket-item .span{
        color:#999;
      }
      `}
         
      </style>
    </>
  )
}