import { useState } from "react";

const Product = ({item}) => {

  const [status , setStatus] = useState(false);
  return <div>
    <div>
      <p>{item.title}</p></div>
      <div><p>{item.desc}</p></div>
    
    <img src={item.image} alt="" />
    <p>{item.amount}</p>
    <div>{
      status ? (<button>Remove Button</button>) : 
      (<button>Add to Cart</button>)
    }
    </div>
    
  </div>;
};

export default Product;
