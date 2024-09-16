import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Dropdown = ({ label, links, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for dropdown

  // Function to close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false); // Close on "Escape" key press
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen} // ARIA attribute for screen readers
        aria-haspopup="true"
        className={`flex items-center justify-between w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${style}`}
      >
        {label}
        <MdKeyboardArrowDown className="ml-2" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          role="menu"
          aria-orientation="vertical"
        >
          <ul className="py-1" role="none">
            {links.map((link, index) => (
              <li key={index} role="none">
                <a
                  href={link.to}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
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
