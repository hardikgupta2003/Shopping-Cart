import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Cart = () => {
  const {cart}=useSelector((state)=> state)
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])
  return (<div>
    {
      cart.length > 0 ?
      (
        <div>
          
          <div className="">
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>
          <div className="">
            <div className="">
              <div className="">Your Cart</div>
              <div className="">Summary</div>
              <p>
                <span>
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="">
              <p>Total Amount : ${totalAmount}</p>
              Checkout Now
            </div>
          </div>
          </div>

          
      ) : (
        <div className="">
          <h1>Cart Empty</h1>
          <Link>
          <button>Shop Now</button></Link>
        </div>
      )
    }
  </div>
  )
};

export default Cart;
