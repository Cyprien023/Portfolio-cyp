import { motion } from "framer-motion";

const Footer: React.FC = () => {
    return (
        <motion.footer
            className="bg-gray-800 text-white p-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center">
                <p className="text-sm">© 2025 cyp. Tous droits réservés.</p>

            </div>
        </motion.footer>
    );
};

export default Footer;
