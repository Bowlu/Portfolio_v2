
const HeroSection = () => {
    return (
        <section className="px-6 pt-40 pb-20 text-center ">
            <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                    Awoyemi Boluwatife
                </span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl mx-auto">
                Frontend Developer building modern, scalable and beautiful web
                experiences.
            </p>

            <button className="mt-8 px-6 py-3 rounded-full bg-brand-purple hover:bg-brand-pink transition-all duration-300 shadow-lg hover:shadow-brand-pink/40">
                View My Work
            </button>
        </section>
    );
}

export default HeroSection;