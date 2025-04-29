import { FaGithub, FaLinkedin } from "react-icons/fa";
import * as React from "react";

const Sidebar: React.FC = () => {
    return (
        <div className="fixed left-0 top-40 h-full flex flex-col justify-center items-center p-4 space-y-6">
            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#477A91] text-6xl hover:text-[#B0D5D9] transition-colors"
            >
                <FaGithub />
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#477A91] text-6xl hover:text-[#B0D5D9] transition-colors"
            >
                <FaLinkedin />
            </a>
        </div>
    );
};

export default Sidebar;
