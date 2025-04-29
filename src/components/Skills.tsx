import { motion } from "framer-motion";
import * as React from "react";

const skills = [
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "🚀" },
    { name: "PHP", icon: "🐘" },
    { name: "Symfony", icon: "🎼" },
    { name: "React / React Native", icon: "⚛️" },
    { name: "SQL", icon: "💾" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "🔧" },
    { name: "Linux", icon: "🐧" },
    { name: "Rust", icon: "🦀" },

];

const Skills: React.FC = () => {
    return (
        <motion.section
            id="skills"
            className="p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <h2 className="text-3xl font-semibold mb-6 text-[#477A91]">🛠️ Compétences</h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map(({ name, icon }) => (
                    <motion.li
                        key={name}
                        className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-lg">{icon}</span> {/* 🎨 Icône associée */}
                        <span className="text-gray-900 font-medium">{name}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Skills;
