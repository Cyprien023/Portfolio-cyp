import { motion } from "framer-motion";

const Projects: React.FC = () => {
    return (
        <motion.section
            id="projects"
            className="p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">📂 Mes Projets</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900">Portfolio</h3>
                    <p className="text-gray-700">Un site personnel pour me présenter.</p>
                </div>
                <div className="p-5 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900">E-commerce</h3>
                    <p className="text-gray-700">Une boutique en ligne avec React.</p>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
