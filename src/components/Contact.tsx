import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <motion.section
            id="contact"
            className="p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
        >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">📧 Contact</h2>

        </motion.section>
    );
};

export default Contact;
