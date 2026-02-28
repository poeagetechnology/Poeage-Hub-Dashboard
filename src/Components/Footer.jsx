import { Link } from "react-router-dom";

export default function Footer() {
  return (
     <footer className="relative mt-20 bg-[#020617] text-neutral-300 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.10),transparent_40%)]" />

      {/* Glossy Highlight */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Poeage Groups
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Poeage Hub is a product of Poeage IT Solutions under Poeage Groups,
            focused on building a secure and scalable online shopping platform.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/poeage-hub" className="hover:text-white transition">
                Poeage Hub
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Poeage
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* STATUS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Platform Status
          </h3>
          <p className="text-sm text-gray-400">
            🚧 Poeage Hub is currently under active development.
          </p>
          <p className="text-sm mt-2 text-gray-400">
            We are focused on delivering a reliable and secure marketplace.
          </p>
        </div>
      </div>

      {/* Divider Glow */}
      <div className="relative border-t border-white/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="relative text-center text-sm py-4 text-gray-400">
        © {new Date().getFullYear()} Poeage Groups. All rights reserved.
      </div>
    </footer>
  );
}