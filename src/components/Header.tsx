import { MouseEventHandler, useState } from "react";

import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  changeSidebarVisibility: (visible: boolean) => void;
}

export function Header({ changeSidebarVisibility }: HeaderProps) {
  const [icon, setIcon] = useState("open");

  function handleMenuClick(event: any): void {
    if (icon === "open") {
      setIcon("close");
      changeSidebarVisibility(false);
    } else {
      setIcon("open");
      changeSidebarVisibility(true);
    }
  }

  return (
    <header className="lg:justify-center w-full py-5 px-5 flex items-center justify-between bg-gray-700 border-b border-gray-600">
      <Logo />

      <div className="lg:hidden flex items-center">
        <span className="pr-2 text-gray-100"> Aulas </span>
        {icon === "open" ? (
          <X
            size={32}
            className="cursor-pointer text-blue-500"
            onClick={handleMenuClick}
          />
        ) : (
          <List
            size={32}
            className="cursor-pointer text-blue-500"
            onClick={handleMenuClick}
          />
        )}
      </div>
    </header>
  );
}
