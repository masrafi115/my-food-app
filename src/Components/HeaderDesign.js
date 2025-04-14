import React, { useState } from 'react';

const HeaderDesign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const navMenuItems = [
    { id: 1, label: 'Menu Item 1' },
    { id: 2, label: 'Menu Item 2' },
    { id: 3, label: 'Menu Item 3' },
  ];

  const dropdownMenuItems = [
    { id: 1, label: 'Dropdown Item 1' },
    { id: 2, label: 'Dropdown Item 2' },
    { id: 3, label: 'Dropdown Item 3' },
  ];

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    setIsOpen(true);
  };

  const handleDropdownItemClick = (item) => {
    console.log(`Dropdown item ${item.label} clicked`);
  };

  return (
    <div className="nvBar">
      <h1>Food Catalog App</h1>
      <div className="newHeader bg-white shadow-lg rounded-lg p-4 flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-bold tracking-wide">Welcome to the New Header</h2>
          <div className="relative">
            <nav>
              <ul className="flex flex-col">
                {navMenuItems.map((item) => (
                  <li key={item.id} className="mb-2">
                    <button
                      className={`nav-item ${activeNavItem === item ? 'active' : ''}`}
                      onClick={() => handleNavItemClick(item)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {isOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 top-0 left-full">
                <ul className="flex flex-col">
                  {dropdownMenuItems.map((item) => (
                    <li key={item.id} className="mb-2">
                      <button
                        className="dropdown-item"
                        onClick={() => handleDropdownItemClick(item)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-sm">This is a new header section added under the current div.</p>
      </div>
    </div>
  );
};

export default HeaderDesign;