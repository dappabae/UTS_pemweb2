import React from "react";
import { Home, HelpCircle, UserCircle, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  // const currentPath = "#";

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Shop", href: "/Shop", icon: <ShoppingBag size={18} /> },
    { label: "Man", href: "/Man", icon: <User size={18} /> },
    { label: "Women", href: "/Women", icon: <User size={18} /> },
    { label: "Bantuan", href: "/Bantuan", icon: <HelpCircle size={18} /> },
  ];

const activeStyle = "text-black";
  const defaultStyle = "text-slate-600 hover:text-black";
  return (
    <header className=" bg-white shadow-sm px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="h-20"
          />
        </div>
        <div className="nav flex gap-2">
          {menuItems.map((item) => (
            <NavLink
              to={item.href}
              className={({isActive}) => 
              `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
              isActive ? activeStyle : defaultStyle
            }`}
          >
            {item.icon && <span className="w-5 h-5">{item.icon}</span>}
            <span>{item.label}</span>
            </NavLink>
          ))} 
            <NavLink
              to="/Login"
              className={({isActive}) => 
              `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
              isActive ? activeStyle : defaultStyle
            }`}
          >
            <span className="W-5 H-5 ">
              <UserCircle size={18}></UserCircle>        
           </span>
            </NavLink>                   
        </div>
      </div>
    </header>
  );
};

export default Header;