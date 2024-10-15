import React from 'react';
import { motion } from 'framer-motion';


const projects = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'A sleek web application showcasing modern design principles.', 
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+1',
    tags: ['React', 'Node.js']
  },
  { 
    id: 2, 
    title: 'Project 2', 
    description: 'An innovative mobile app revolutionizing user interaction.', 
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+2',
    tags: ['Vue.js', 'Express']
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'A robust backend system powering complex data operations.', 
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+3',
    tags: ['Angular', 'MongoDB']
  },
  { 
    id: 4, 
    title: 'Project 4', 
    description: 'A cross-platform mobile solution for seamless productivity.', 
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+4',
    tags: ['React Native', 'Firebase']
  },
  { 
    id: 5, 
    title: 'Project 5', 
    description: 'An elegant e-commerce platform with advanced features.', 
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+5',
    tags: ['TypeScript', 'GraphQL']
  },
  { 
    id: 6, 
    title: 'Project 6', 
    description: 'A cutting-edge web app showcasing the latest in frontend tech.', 
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+6',
    tags: ['Next.js', 'Tailwind CSS']
  },
];

const ModernPortfolio = () => {
  return (
    <div className="bg-[#151419] min-h-screen text-white p-8">
      <header className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Your Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#projects" className="hover:text-[#f56c05]">Projects</a></li>
              <li><a href="#about" className="hover:text-[#f56c05]">About</a></li>
              <li><a href="#contact" className="hover:text-[#f56c05]">Contact</a></li>
            </ul>
          </nav>
        </div>
        <p className="text-xl text-[#f56c05]">Creative Designer & Developer</p>
      </header>

      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#f56c05]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#1E2328] rounded-lg overflow-hidden"
              whileHover={{ y: -5 , boxShadow: '0 0 10px 5px rgba(245, 108, 5, 1)',}}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-[#f56c05] text-white px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#f56c05]">About Me</h2>
        <p className="text-gray-300">
          I'm a passionate designer and developer with a keen eye for detail and a love for creating
          intuitive, user-friendly experiences. With expertise in both frontend and backend technologies,
          I bring a holistic approach to every project.
        </p>
      </section>

      <section id="contact" className="bg-[#1E2328] p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-[#f56c05]">Get in Touch</h2>
        <p className="mb-2">Email: your.email@example.com</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p>Location: Your City, Country</p>
      </section>
    </div>
  );
};
export default ModernPortfolio;
