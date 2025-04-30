import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/cartSlice";
import toast from "react-hot-toast";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div>
      <div className="flex items-center p-2 md:p-5 justify-between  mt-2 mb-2 md:mx-5 ">
        <div className="flex xs:p-2  md:p-3 md:gap-5 xs:gap-2 items-center">
          <div className="w-[30%] p-2">
            <img className="object-cover xs:h-[80px] " src={item.image} />
          </div>
          <div className="md:ml-10 xs:ml-5 self-start md:space-y-5 xs:space-y-3 w-[100%] ">
            <h1 className="text-xl xs:text-md text-slate-700 font-semibold xs:text-md ">
              {item.title}
            </h1>
            <h1 className="text-base text-slate-700 font-medium xs:font-small">
              {item.description.split(" ").slice(0, 10).join(" ")}
            </h1>
            <div className="flex items-center justify-between">
              <p className="font-bold md:text-lg xs:text-md text-green-600">
                {item.price}
              </p>
              <div
                className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                onClick={removeFromCart}
              >
                <FcDeleteDatabase />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-600"></div>
    </div>
  );
}

export default CartItem;
