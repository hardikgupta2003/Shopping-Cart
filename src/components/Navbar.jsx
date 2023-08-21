import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
  return <nav className='bg-slate-900 text-white flex justify-between'>
    <img src="{} " />
    <div className='flex'>
      <div>Home</div>
      <FaShoppingCart/>
     
    </div>
  </nav>;
};

export default Navbar;
