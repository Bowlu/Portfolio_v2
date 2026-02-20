const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Material UI"],
    tools: ["Git", "GitHub", "Vite", "Figma", "Postman"],
    other: ["Data Analysis", "Quality Management", "Team Collaboration"],
};

const Skills = () => {
    return (
        <section id="skills" className="bg-brand-black text-white px-6 py-24">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4">
                    Skills
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full mb-16"></div>

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Category */}
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-xl font-semibold mb-6 capitalize text-brand-yellow">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-brand-pink hover:shadow-[0_0_15px_#9929EA] transition-all duration-300 text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;