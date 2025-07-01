import React,{useState} from 'react'
import { IoIosStarHalf } from "react-icons/io";
import Products from './Products';
import { FaCartPlus } from "react-icons/fa";
import './Navbar.css';



const Navbar = ({onCategoryClick}) => {
  

  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <IoIosStarHalf size={30}/>
      </div>
      <ul className='navbar-menu'>
        {
        Products.map((category,index)=>(
           <li key={index} 
           className='navbar-item'
           onClick={() => onCategoryClick(category.category)} // 👈 handle click
            >
            {category.category}
           </li> 
        )
    )
        }

      </ul>
      <div className="cart-logo">
        <FaCartPlus size={30}/>
      </div>
    </nav>
  )
}

export default Navbar
