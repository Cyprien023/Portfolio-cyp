import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <Transition
            show={isVisible}
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
        >
            <nav className="fixed top-0 left-0 w-full p-5 flex justify-between items-center bg-white shadow-md">
                <h1 className="text-5xl font-bold text-[#477A91] grape-nuts">Cyprien Luzuy</h1>
                <div className="space-x-4">
                    <a href="#about" className="text-xl font-bold">À propos</a>
                    <a href="#skills" className="text-xl font-bold">Compétences</a>
                    <a href="#projects" className="text-xl font-bold">Projets</a>
                    <a href="#contact" className="text-xl font-bold">Contact</a>
                    <a
                        href=".../public/CV.pdf"
                        download="CV Luzuy Cyprien.pdf"
                        className="bg-[#D6AA58] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#B08946] transition-all duration-300"
                    >
                        📄 CV
                    </a>
                </div>
            </nav>
        </Transition>
    );
};

export default Navbar;

