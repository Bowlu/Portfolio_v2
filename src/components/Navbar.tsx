import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-brand-black/80 backdrop-blur-md z-50 border-b border-white/15">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-brand-purple shadow-lg">
                    AB
                </h1>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-300">
                    <a href="#about" className="hover:text-brand-pink duration-300">
                        About
                    </a>
                    <a href="#projects" className="hover:text-brand-pink duration-300">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-brand-pink duration-300">
                        Contact
                    </a>

                    <button className="px-5 py-2 rounded-full bg-brand-purple hover:bg-brand-pink transition-all duration-300">
                        Resume
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-black border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-gray-300">
                    <a href="#about" onClick={handleMobileMenu} className="hover:text-brand-pink">
                        About
                    </a>
                    <a href="#projects" onClick={handleMobileMenu} className="hover:text-brand-pink">
                        Projects
                    </a>
                    <a href="#contact" onClick={handleMobileMenu} className="hover:text-brand-pink">
                        Contact
                    </a>

                    <button className="px-5 py-2 rounded-full bg-brand-purple hover:bg-brand-pink transition-all duration-300">
                        Resume
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;