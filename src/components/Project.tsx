const Project = () => {
    return (
        <div className="bg-zinc-900 rounded-xl p-6 hover:border hover:border-brand-pink transition-all duration-300 hover:shadow-[0_0_20px_#9929EA]">
            <h3 className="text-xl font-semibold text-brand-purple">
                School Management System
            </h3>

            <p className="text-gray-400 mt-2">
                Built with React, TypeScript and Material UI.
            </p>

            <div className="flex gap-2 mt-4">
                <span className="bg-brand-yellow text-black px-3 py-1 rounded-full text-sm">
                    React
                </span>
                <span className="bg-brand-yellow text-black px-3 py-1 rounded-full text-sm">
                    TypeScript
                </span>
            </div>
        </div>
    );
}

export default Project;