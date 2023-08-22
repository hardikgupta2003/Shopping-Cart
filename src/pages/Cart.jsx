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
  return (<div className="">
    {
      cart.length > 0 ?
      (
        <div className="flex justify-center gap-3">
          
          <div className="w-[490px]">
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>
          <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
            <div className="flex flex-col gap-5">
              <div className="text-green-800 font-semibold text-xl">Your Cart</div>
              <div className="text-green-700 uppercase -mt-5 font-semibold text-5xl">Summary</div>
              <p>
                <span className="text-gray-700 font-semibold text-xl">
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
