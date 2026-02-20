const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-brand-black text-white px-6 py-24"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-pink blur-3xl opacity-20 rounded-2xl"></div>

                    <img
                        src="/your-image.jpg"
                        alt="Boluwatife"
                        className="relative rounded-2xl border border-white/10"
                    />
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-purple">
                        About Me
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        I’m a <span className="text-brand-yellow">Frontend Developer</span>
                        passionate about building scalable and user-focused applications
                        using <span className="text-brand-yellow">React</span>,
                        <span className="text-brand-yellow"> TypeScript</span> and modern UI systems.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        I’ve worked on a <span className="text-brand-yellow">School Management System</span>,
                        designed landing pages, and contributed to real-world production
                        features that improve user experience and performance.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        I love turning complex ideas into clean, intuitive interfaces that
                        feel modern, accessible, and impactful.
                    </p>

                    {/* CTA */}
                    <button className="mt-8 px-6 py-3 rounded-full bg-brand-purple hover:bg-brand-pink transition-all duration-300 shadow-lg hover:shadow-brand-pink/40">
                        Let’s Work Together
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;