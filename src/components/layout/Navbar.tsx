const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed left-0 w-full bg-red-500">
      <nav>
        <div>
          {navItems.map((navItem) => (
            <a>{navItem.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
