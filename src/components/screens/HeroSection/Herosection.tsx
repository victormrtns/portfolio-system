import React, { useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export const HeroSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [isTyping, setIsTyping] = useState(true)
    const nameControls = useAnimationControls()

    const name = "Victor Martins"
    const role = "Full Stack Developer"
    const description = "Building modern web applications with passion and precision"

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/victormrtns",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/victor-hugo-a847b21b7/",
        },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.8,
            },
        },
    }

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    const cursorVariants = {
        blink: {
            opacity: [0, 1],
            transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse" as const,
            },
        },
    }

    const splitText = (text: string) => {
        return text.split(" ").map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em] last:mr-0">
                {word}
            </motion.span>
        ))
    }

    const startTypingAnimation = async () => {
        setIsTyping(true)
        await nameControls.set({ width: "0%" })
        await nameControls.start({
            width: "100%",
            transition: { duration: 1, ease: "easeOut" },
        })
        setIsTyping(false)
    }

    return (
        <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center">
            {/* Main Content */}
            <motion.div
                className="text-center space-y-6 md:space-y-8 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                variants={containerVariants}
                onViewportEnter={startTypingAnimation}
            >
                {/* Name with typing animation */}
                <div className="relative inline-flex justify-center">
                    <div className="overflow-hidden">
                        <motion.h1
                            animate={nameControls}
                            className="text-3xl md:text-4xl lg:text-6xl font-bold whitespace-nowrap"
                            style={{
                                backgroundImage: "linear-gradient(to right, #3943B7, #6D74D9)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {name}
                        </motion.h1>
                    </div>
                    {isTyping && (
                        <motion.span
                            variants={cursorVariants}
                            animate="blink"
                            className="absolute right-[-4px] top-0 h-[1.2em] w-[2px] bg-[#3943B7]"
                        />
                    )}
                </div>

                {/* Role with word animation */}
                <motion.p className="text-lg md:text-xl lg:text-2xl text-muted-foreground" variants={containerVariants}>
                    {splitText(role)}
                </motion.p>

                {/* Description with word animation */}
                <motion.p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" variants={containerVariants}>
                    {splitText(description)}
                </motion.p>

                {/* Social Links - Mobile */}
                <motion.div
                    className="flex justify-center gap-4 mt-8 md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative size-12 flex items-center justify-center rounded-full
                     bg-background border-2 border-[#3943B7]/20 hover:border-[#3943B7]
                     transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <social.icon className="size-5 text-muted-foreground group-hover:text-[#3943B7] transition-colors duration-300" />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Social Links - Desktop */}
            <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                {socialLinks.map((social) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative size-12 flex items-center justify-center rounded-full
                     bg-background border-2 border-[#3943B7]/20 hover:border-[#3943B7]
                     transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <social.icon className="size-5 text-muted-foreground group-hover:text-[#3943B7] transition-colors duration-300" />
                        <motion.span
                            className="absolute right-full mr-3 px-2 py-1 rounded bg-[#3943B7] text-white
                       text-sm whitespace-nowrap opacity-0 pointer-events-none"
                            initial={{ opacity: 0, x: 10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                        >
                            {social.name}
                        </motion.span>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    )
})

HeroSection.displayName = "HeroSection"

