import { motion } from "framer-motion";

const Skills: React.FC = () => {
    return (
        <motion.section
            id="skills"
            className="p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">🛠️ Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["React", "Tailwind", "Firebase", "Node.js"].map(skill => (
                    <motion.div
                        key={skill}
                        className="p-5 bg-gray-100 rounded-lg hover:shadow-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
