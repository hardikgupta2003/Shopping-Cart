import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  
  const [loading,setLoading]= useState(false);
  const [items,setItems]=useState([]);

   async function fetchProductData () {

    setLoading(true);
    try{
       const res = fetch(API_URL);
    const data = res.json();
    setItems(data);
    }
   catch(e){
    console.log('error occured!');
    setItems([]);
   }
   setLoading(false);
   }

   useEffect(()=> {
    fetchProductData();
   },[])
  return (
  <div>
    {
      loading ? (<Spinner/>) :
      items.length > 0 ? (
        <div>{ items.map ((item)=>(
          <Product key={item.id} item={item} />
        ))}</div>
       
      ) :
      <div>
        <p>No record Found</p></div>
    }
  </div>
    );
};

export default Home;
