import React from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import chickenLogo from '../assets/images/Chicken_Republic_Logo.png';

const OngoingOrder = ({ orderID, status, date, IMG }) => {
  return (
    <div className="w-[550px] h-[140px] border items-center rounded-2xl flex justify-between p-4 overflow-hidden">
      <div className="flex gap-3 items-center">
        <div className="w-[100px] rounded-2xl">
          <img src={chickenLogo} alt="Chicken Logo" className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-lg font-primaryFont">
            {orderID}
          </h3>
          <button className="px-2 py-1 bg-primaryColor bg-opacity-10 rounded-md text-[15px] text-primaryColor font-primaryFont">
            {status}
          </button>
          <p className="text-gray-300 font-primaryFont">{date}</p>
        </div>
      </div>

      <div>
        <button className="px-6 py-3 flex justify-center items-center gap-2 bg-primaryColor rounded-md font-primaryFont text-white">
          <MdDeliveryDining /> Track order
        </button>
      </div>
    </div>
  );
};

export default OngoingOrder;
