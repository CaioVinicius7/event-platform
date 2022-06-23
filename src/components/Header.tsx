import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="lg:justify-center w-full py-5 px-4 flex items-center justify-between  bg-gray-700 border-b border-gray-600">
      <Logo />
      <List size={32} className="lg:hidden cursor-pointer" />
    </header>
  );
}
