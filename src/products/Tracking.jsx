import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Tracking = () => {
  const [phone, setPhone] = useState('');

  return (
    <section className="h-screen px-20 w-full flex justify-center items-center">
      <form action="">
        <div className="w-[900px] p-10 space-y-5">
          <div>
            <label className="block mb-3 font-primaryFont text-xl" htmlFor="">
              Write order id
            </label>
            <input
              type="text"
              placeholder="Order Id"
              required
              className="w-full p-3 rounded-lg ring-gray-300 ring-1"
            />
          </div>

          <div>
            <label className="block mb-3 font-primaryFont text-xl" htmlFor="">
              Enter your phone number
            </label>
            <div className="w-full">
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={setPhone}
                placeholder="Enter your phone number"
                enableSearch={true}
                required
                inputStyle={{
                  width: '100%', 
                  padding: '25px',
                  paddingLeft: '50px',
                  borderRadius: '0.5rem', // Same border-radius as Tailwind's rounded-lg
                  border: '1px solid #D1D5DB', // Tailwind's ring-gray-300 equivalent
                }}
                buttonStyle={{
                  borderRadius: '0.5rem 0 0 0.5rem', // Match left corner rounding for the flag button
                  border: '1px solid #D1D5DB',
            
                }}
              />
            </div>
          </div>

          <button className="bg-primaryColor px-10 py-3 text-white rounded-lg text-center">
            Track order
          </button>
        </div>
      </form>
    </section>
  );
};

export default Tracking;
