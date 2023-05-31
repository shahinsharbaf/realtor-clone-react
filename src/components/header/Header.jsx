import React from "react";
import Menus from "./Menus";
import Logo from "./Logo";

function Header() {
  return (
    <header className="border-b bg-white shadow-sm sticky top-0">
      <div className="w-11/12 sm:w-9/12 mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="sm:block">
            <ul className="flex">
              <Menus itemName="Home" path={"/"} />
              <Menus itemName="Offers" path={"/offers"} />
              <Menus itemName="Sign in" path={"/signin"} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
