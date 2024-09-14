import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Dropdown = ({ label, links, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${style}`}
      >
        {label}
        <MdKeyboardArrowDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
