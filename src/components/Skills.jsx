import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Tailwind', level: 'Upper Intermediate' },
        { name: 'Html-Css', level: 'Upper Intermediate' },
        { name: 'Typescript', level: 'Beginner' },
        { name: 'Git-Github', level: 'Intermediate' },
        // Ajoutez plus de compétences ici...
    ];

    return (
        <div className="p-5">
            <ul>
                {skills.map((skill, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.1, zIndex: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="flex justify-between ">
                            <span className='pt-3' >{skill.name}</span>
                          
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded">
                            <div
                                className={`absolute left-0 top-0 h-2 rounded ${
                                    skill.level === 'Beginner'
                                        ? 'bg-red-500 w-1/4'
                                        : skill.level === 'Intermediate'
                                        ? 'bg-yellow-500 w-1/2'
                                        : skill.level === 'Upper Intermediate'
                                        ? 'bg-green-500 w-3/4'
                                        : 'bg-blue-500 w-full'
                                }`}
                            ></div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;