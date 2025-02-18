import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    return (
        <motion.nav
            className="p-5 flex justify-between items-center bg-white shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-3xl font-bold text-[#477A91]">Cyprien Luzuy</h1>
            <div className="space-x-4">
                <a href="#about" className="text-xl font-bold mr-10">À propos</a>
                <a href="#skills" className="text-xl font-bold mr-10">Compétences</a>
                <a href="#projects" className="text-xl font-bold mr-10">Projets</a>
                <a href="#contact" className="text-xl font-bold mr-10">Contact</a>

                <motion.a
                    href=".../public/CV.pdf"
                    download="CV Luzuy Cyprien.pdf"
                    className="items-center gap-2 bg-[#D6AA58] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#B08946] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    CV
                </motion.a>

            </div>
        </motion.nav>
    );
};

export default Navbar;
