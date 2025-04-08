import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <motion.section
            id="contact"
            className="p-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex justify-center items-center gap-2">
                📬 <span>Contact</span>
            </h2>

            <div className="text-lg text-gray-700 space-y-3">
                <p>
                    📧 <strong>Email : </strong>
                    <a href="mailto:cyprienluzuy@gmail.com" className="text-blue-600 hover:underline">
                        cyprienluzuy@gmail.com
                    </a>
                </p>
                <p>
                    📞 <strong>Téléphone : </strong>
                    <a href="tel:+33782661409" className="text-blue-600 hover:underline">
                        +33 7 82 66 14 09 test
                    </a>
                </p>
                <p>
                    📍  <strong>Adresse :</strong> 9 rue Condorcet 63000
                </p>
            </div>

            <div className="my-8 border-t border-gray-300 w-3/4 mx-auto"></div>

            <div className="mt-10 text-gray-600 text-sm flex justify-center space-x-6">
                <a href="#" className="hover:underline">Mentions Légales</a>
                <a href="#top" className="hover:underline">Remonter en haut</a>
            </div>
        </motion.section>
    );
};

export default Contact;
