const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed left-0 z-50 w-full bg-blue-500">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-fit gap-8 rounded-full bg-white px-8 py-4"
      >
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Abundance
        </a>
        <div className="flex items-center gap-6">
          {navItems.map((navItem) => (
            <a key={navItem.href} href={navItem.href} className="text-sm">
              {navItem.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
