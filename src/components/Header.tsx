import { motion } from "framer-motion";
import * as React from "react";

const Header: React.FC = () => {
    return (
        <header className="flex flex-col items-center text-center p-10">
            <motion.img
                src="./public/img/photo-cv.png"
                alt="Ma photo"
                className="w-40 h-40 rounded-full shadow-lg object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <motion.p
                className="mt-4 text-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Étudiant en informatique à l'école Hexagone | Full stack
            </motion.p>
        </header>
    );
};

export default Header;
