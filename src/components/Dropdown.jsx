import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = ({ label, links, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        className="inline-flex justify-start items-center w-auto rounded-md py-2 text-md font-bold text-white md:text-slate-700 "
      >
        {label}
        <FaChevronDown className=" h-3 w-5 ml-2  " />
      </span>

      {isOpen && (
        <div
          className=" absolute left-[-50%] top-[130%] w-[200px] rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {links.map((link) => (
              <Link
                
                to={link.to}
                className=" block px-4 py-2 text-sm {style} hover:bg-gray-300 "
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;