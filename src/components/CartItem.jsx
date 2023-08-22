import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from 'react-icons/fc'
const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (<div className=" ">
    <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center ">
      <div className="w-[30%]">
      <img className="object-cover" src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-full md:w-[70%]">
          <h1 className="font-semibold text-slate-700 text-xl">{item.title}</h1>
          <h1 className="font-semibold text-slate-700 text-base">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
      </div>
    </div>
  </div>);
};

export default CartItem;
