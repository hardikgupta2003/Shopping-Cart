import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import {MdDelete} from 'react-icons/md'
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (<div className=" ">
  <div className="flex items-center p-2 md:p-5  border-b-2 border-slate-500  mt-2 mb-2 md:mx-5">
    <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center ">
      <div className="w-[30%]">
      <img className="object-cover" alt="cart-item" src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-full md:w-[70%]">
          <h1 className="font-semibold text-slate-700 text-xl">{item.title}</h1>
          <h1 className="font-medium text-slate-700 text-base">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
            className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 text-red-800 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <MdDelete/>
            </div>
          </div>
      </div>
    </div>
  </div></div>)
};

export default CartItem;
