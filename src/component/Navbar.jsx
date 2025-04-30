import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="ml-5">
            <img className="h-14" src="../../public/logo3.png" />
          </div>
        </NavLink>
        <div className="flex  font-medium  items-center text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <MdShoppingCart className="text-xl" />
              {cartItems.length > 0 ? (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white ">
                  {cartItems.length}
                </span>
              ) : null}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
