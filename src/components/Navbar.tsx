import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О нас" },
  { href: "#prices", label: "Прайс" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#gallery", label: "Фото" },
  { href: "#blog", label: "Блог" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-beige">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/bucket/99e16985-554d-46b0-a41a-ef2768a17f0b.png" alt="Body Slim" className="h-10 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-sage transition-colors duration-200 font-body"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacts"
          className="hidden md:block bg-sage text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-200 font-body"
        >
          Записаться
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-warm-beige px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-sage transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="bg-sage text-white text-sm px-5 py-2.5 rounded-full text-center"
          >
            Записаться
          </a>
        </div>
      )}
    </nav>
  );
}

export { navLinks };