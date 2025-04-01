import React from "react"
import { motion } from "framer-motion"
import { Smartphone, Zap, Target, Briefcase } from "lucide-react"

interface AboutSectionProps {
    ref: (element: HTMLDivElement | null) => void
}

export const AboutSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <section
            ref={ref}
            id="about"
            className="min-h-screen py-20 flex items-center"
        >
            <div className="container px-4 mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl font-bold bg-gradient-to-r from-[#3943B7] to-[#6D74D9]
                bg-clip-text text-transparent"
                        >
                            About Me
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2">
                            <Smartphone className="h-5 w-5 text-[#3943B7]" />
                            <span className="text-lg font-medium">Mobile & Web Developer</span>
                            <span className="text-muted-foreground">|</span>
                            <span className="text-muted-foreground">Front-End at SmartNX</span>
                        </motion.div>
                    </div>

                    {/* Introduction */}
                    <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center text-muted-foreground">
                        <p className="text-lg leading-relaxed">
                            I'm passionate about mobile and web development, focused on building scalable applications and seamless
                            user experiences. I work with React Native, Swift, SwiftUI, React, and TypeScript, developing modern,
                            high-performance solutions.
                        </p>
                    </motion.div>

                    {/* What I Offer */}
                    <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3943B7]/10">
                                    <Zap className="h-5 w-5 text-[#3943B7]" />
                                </div>
                                <h3 className="text-xl font-semibold">What I Offer</h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3943B7]/10 flex items-center justify-center mt-0.5">
                                        <span className="text-[#3943B7] text-sm">🚀</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Scalable Mobile & Web Applications:</span>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Developing robust apps and systems to ensure high performance and optimized user experience.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3943B7]/10 flex items-center justify-center mt-0.5">
                                        <span className="text-[#3943B7] text-sm">🔗</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Expertise in React Native & SwiftUI:</span>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Crafting fluid and responsive interfaces across platforms while following best usability
                                            practices.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3943B7]/10 flex items-center justify-center mt-0.5">
                                        <span className="text-[#3943B7] text-sm">🛠</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Experience with Complex Ecosystems:</span>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Working on an omnichannel solution for major companies, integrating WebSockets, automated
                                            workflows, and interactive dashboards.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3943B7]/10 flex items-center justify-center mt-0.5">
                                        <span className="text-[#3943B7] text-sm">🔍</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Clean Code & Solid Architecture:</span>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Applying best practices such as Design Patterns, API Rest, MVVM, and Agile methodologies to create
                                            well-structured and maintainable solutions.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3943B7]/10">
                                    <Target className="h-5 w-5 text-[#3943B7]" />
                                </div>
                                <h3 className="text-xl font-semibold">Career Goals & Impact</h3>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3943B7]/10 flex items-center justify-center mt-0.5">
                                        <span className="text-[#3943B7] text-sm">🎯</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Career Goals:</span>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Advance in mobile and web development, deepening my expertise in SwiftUI and React Native to build
                                            innovative products.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3943B7]/10 flex items-center justify-center mt-0.5">
                                        <span className="text-[#3943B7] text-sm">🌱</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Vision:</span>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            Contribute to challenging projects that positively impact businesses and end users.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3943B7]/10">
                                        <Briefcase className="h-4 w-4 text-[#3943B7]" />
                                    </div>
                                    <h4 className="font-medium">Professional Impact</h4>
                                </div>

                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span className="text-[#3943B7]">📈</span>
                                        <span>
                      <strong>SmartNX:</strong> Developing an omnichannel system used by companies like TIM, Mercedes,
                      and Alma Viva.
                    </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#3943B7]">📌</span>
                                        <span>
                      <strong>Matching:</strong> Building a React Native app to connect people with projects that align
                      with their skills.
                    </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#3943B7]">🏛</span>
                                        <span>
                      <strong>UNESP:</strong> Creating a mobile app for promoting academic projects, using SwiftUI &
                      React Native.
                    </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div variants={fadeInUp} className="text-center text-muted-foreground text-sm pt-8">
                        <p>
                            Always seeking innovation and new challenges, I'm open to exchanging experiences and connecting with
                            professionals who share my passion for technology!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
})

AboutSection.displayName = "AboutSection"

