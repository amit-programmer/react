import React from "react";

const About = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
            <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-2xl p-8 max-w-xl w-full"></div>
                <h2 className="text-4xl font-extrabold text-white mb-4 text-center">
                    About Us
                </h2>
                <p className="text-gray-300 text-lg mb-6 text-center">
                    Welcome to our modern Todo App! Our mission is to help you organize your tasks efficiently and boost your productivity.
                </p>
                <ul className="text-gray-400 space-y-2 mb-6">
                    <li>✔️ Simple and intuitive interface</li>
                    <li>✔️ Dark mode for comfortable viewing</li>
                    <li>✔️ Fast and responsive experience</li>
                </ul>
                <div className="flex justify-center">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        
    );
};

export default About;