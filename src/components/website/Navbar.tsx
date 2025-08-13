import React from "react";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-10 bg-pink-50 flex items-center justify-between p-4 shadow">
      {/*    left*/}
      <div>
        {/*    logo     */}
        <h1 className="text-xl font-grotesk font-bold">Monkey.Loco</h1>
      </div>

      {/*    center*/}
      <nav className="flex items-center justify-between gap-6 font-jakarta">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/*    right*/}
      <div className="flex items-center gap-6">
        <Button>Login</Button>
        <Button>Go Loco 🤪</Button>
      </div>
    </header>
  );
};
export default Navbar;
