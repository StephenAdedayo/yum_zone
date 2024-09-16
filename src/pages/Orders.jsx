import React, { useState } from "react";
import OngoingOrder from "../components/OngoingOrder";





const Orders = () => {
  const [activeTab, setActiveTab] = useState(0);
  const date = Date();
  const tabs = ["Ongoing", "Completed"];

  return (
    <section className="w-full h-screen">
      <div className="w-full h-24 bg-primaryColor  flex items-center justify-center">
        <h1 className="text-center text-bold font-primaryFont text-xl text-white">
          My Orders
        </h1>
      </div>
      <div className="px-20 h-screen">
        <div className="flex justify-center w-full items-center">
          <div className="flex flex-row items-center gap-4 w-[250px] justify-center h-[70px] rounded-full bg-primaryColor bg-opacity-10 mt-10">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2 ${
                  activeTab === index
                    ? " bg-primaryColor rounded-full px-5 text-white  transition-transform  ease-in-out duration-700"
                    : "text-black"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full py-40">
          {activeTab === 0 && (
            <div className="flex justify-between gap-8">
            <OngoingOrder orderID="order #100234" status="pending" date="13 Sep 2024 09:34PM " />
            <OngoingOrder orderID="order #100234" status="pending" date="13 Sep 2024 09:34PM " />
            <OngoingOrder orderID="order #100234" status="pending" date="13 Sep 2024 09:34PM " />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;
