import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-brand-black text-white px-6 py-24"
        >
            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4">
                    Let’s Connect
                </h2>
                <div className="h-1 w-20 mx-auto bg-gradient-to-r from-brand-purple to-brand-pink rounded-full mb-10"></div>

                <p className="text-gray-300 max-w-2xl mx-auto mb-16">
                    I’m always open to discussing new opportunities, creative ideas,
                    or collaborations. Feel free to reach out — I’d love to hear from you.
                </p>

                {/* Contact Form */}
                <form className="grid md:grid-cols-2 gap-6 text-left">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-all duration-300"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-all duration-300"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="md:col-span-2 bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple transition-all duration-300"
                    />

                    <button
                        type="submit"
                        className="md:col-span-2 px-6 py-3 rounded-full bg-brand-purple hover:bg-brand-pink transition-all duration-300 shadow-lg hover:shadow-brand-pink/40"
                    >
                        Send Message
                    </button>
                </form>

                {/* Direct Contact + Socials */}
                <div className="mt-16 flex flex-col items-center gap-6 text-gray-400">

                    <a
                        href="mailto:your@email.com"
                        className="flex items-center gap-2 hover:text-brand-yellow transition-colors"
                    >
                        <Mail size={18} />
                        boluwatife@gmail.com
                    </a>

                    <div className="flex gap-6 text-xl">
                        <a
                            href="#"
                            className="hover:text-brand-pink transition-colors"
                        >
                            <Github />
                        </a>

                        <a
                            href="#"
                            className="hover:text-brand-pink transition-colors"
                        >
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;