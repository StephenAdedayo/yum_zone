import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaHeart, FaStar, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add, increase, decrease } from "../redux/slice/CartSlice";

const Modal = ({ isModalOpen, setIsModalOpen, productID }) => {
  const [product, setProducts] = useState([]);
  const dispatch = useDispatch();

  const varaints = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === productID)
  );
  const amount = cartItem ? cartItem.amount : 0; // If not in the cart, set default to 0

  const fetchProducts = async (productID) => {
    try {
      const response = await fetch(
        `http://localhost:8000/products/${productID}`
      );
      if (!response.ok) {
        throw new Error("Error occured while fetching data");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("error occured", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (isModalOpen && productID) {
      fetchProducts(productID);
    }
  }, [isModalOpen, productID]);

  const { id, category, title, price, description, image } = product;

  const total = (price * amount)?.toFixed(2);

  return (
    <div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            onClick={() => setIsModalOpen(false)}
            variants={varaints}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="fixed top-0 right-0 z-50 grid place-content-center left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-70"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-[500px] relative p-4 rounded-md "
            >
              <div className="flex w-full mb-5 justify-between items-center">
                <div className="flex items-center gap-3">
                  <img className="w-[150px]" src={image} alt="" />
                  <div>
                    <p className="capitalize text-lg">{title}</p>
                    <p className="capitalize text-lg">{category}</p>
                    <p className="flex items-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <CiStar key={index} className="" />
                      ))}
                      (0)
                    </p>
                    <p>$ {price?.toFixed(2)}</p>
                  </div>
                </div>

                <div className="text-2xl hover: size-[30px] bg-green-50 rounded-full grid place-content-center">
                  <CiHeart />
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-xl">Description</p>
                <p className="text-gray-500 text-[16px]">
                  {title} {description}
                </p>
              </div>

              <div className="w-full mt-5 rounded-md border-2 border-gray-200 p-3">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Variety</p>
                  <div className="bg-red-200 rounded-md px-4 py-2">
                    <p className="text-red-500">Required</p>
                  </div>
                </div>
                <p className="text-primaryColor">Select One</p>

                <div className="space-y-2 mt-5">
                  <div className="flex justify-between items-center">
                    <div className=" flex items-center gap-2 ">
                      <input
                        className="size-[20px] cart rounded-full"
                        type="radio"
                      />
                      <p className="text-[16px] text-gray-500">Small</p>
                    </div>
                    <p className="text-[16px] text-gray-500">$ 150.00</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className=" flex gap-2 ">
                      <input
                        className="size-[20px] cart rounded-full"
                        type="radio"
                      />
                      <p className="text-[16px] text-gray-500">Large</p>
                    </div>
                    <p className="text-[16px] text-gray-500">$ 250.00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex justify-between items-center text-green-500">
                  <p className="text-[16px]">Total Amount:</p>
                  <p className="text-[16px]">$ {total}</p>
                </div>

                <div className="flex items-center mt-3">
                  <div className="flex flex-[20%] gap-2">
                    <div
                      onClick={() => dispatch(decrease({ id }))}
                      className=" bg-gray-200 grid border cursor-pointer border-gray-400 place-content-center size-[30px] rounded-full"
                    >
                      <p className=" text-gray-400 text-xl">-</p>
                    </div>

                    <p className=" text-xl">{amount}</p>

                    <div
                      onClick={() => dispatch(increase({ id }))}
                      className=" bg-primaryColor cursor-pointer grid place-content-center size-[30px] rounded-full"
                    >
                      <p className=" text-white text-xl">+</p>
                    </div>
                  </div>

                  <div className="flex-[75%]">
                    <button
                      onClick={() => dispatch(add(product))}
                      className="capitalize rounded-md px-6 w-full py-3 bg-primaryColor text-white"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setIsModalOpen(false)}
                className="absolute hover:bg-green-100 transition-colors duration-500 delay-75 ease-in-out top-2 right-2 border border-green-200 grid place-content-center size-[30px] rounded-full"
              >
                <p>
                  <FaTimes />
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
