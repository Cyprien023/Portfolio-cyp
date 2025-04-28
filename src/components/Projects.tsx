import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Project {
    id: number;
    name: string;
    description: string;
    github: string;
    image: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Erreur lors de la récupération des projets :', error));
    }, []);

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
                {projects.map((project) => (
                    <div key={project.id} className="p-5 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                        <p className="text-gray-700 mb-2">{project.description}</p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Voir sur GitHub
                        </a>
                        <img
                            src={project.image}
                            alt={project.name}
                            className="mt-4 rounded shadow-md"
                        />
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
