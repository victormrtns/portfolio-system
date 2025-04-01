import React from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
    {
        title: "Kanban Board Application",
        description:
            "Full-stack Kanban board application with drag-and-drop functionality. Features include user authentication, real-time board management, and card organization. Built with a React frontend and Spring backend for robust task management.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&h=600&fit=crop",
        links: [
            {
                name: "Frontend Repository",
                url: "https://github.com/victormrtns/kanban-front-react",
                icon: Github,
            },
            {
                name: "Backend Repository",
                url: "https://github.com/victormrtns/kanban-spring-api",
                icon: Github,
            },
        ],
        technologies: ["React", "Material UI", "Spring Boot", "JWT", "PostgreSQL", "Docker"],
    },
    {
        title: "UNL Vaccination Wallet",
        description:
            "A web application for generating vaccination wallets tailored for Brazilian women. Users can save and manage vaccination records and generate PDF versions of their vaccination wallet anytime.",
        image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?q=80&w=1000&h=600&fit=crop",
        links: [
            {
                name: "GitHub Repository",
                url: "https://github.com/victormrtns/frontend-site-UNL",
                icon: Github,
            },
            {
                name: "Live Demo",
                url: "https://carteirinhavacinacaounl.netlify.app/",
                icon: ExternalLink,
            },
        ],
        technologies: ["React", "React Router", "TailwindCSS", "LocalStorage"],
    },
    {
        title: "Star Wars API Consumer",
        description:
            "React application that consumes the Star Wars API (SWAPI) to display information about the Star Wars universe. Features a clean Material UI interface and efficient data fetching.",
        image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=1000&h=600&fit=crop",
        links: [
            {
                name: "GitHub Repository",
                url: "https://github.com/victormrtns/smartnx-frontend-challenge",
                icon: Github,
            },
        ],
        technologies: ["React", "Material UI", "Vite", "JavaScript"],
    },
    {
        title: "MKS Films API",
        description:
            "RESTful API for managing films with authentication and caching. Built with NestJS and TypeScript, featuring Redis caching and JWT authentication for secure and efficient data handling.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&h=600&fit=crop",
        links: [
            {
                name: "GitHub Repository",
                url: "https://github.com/victormrtns/mks-backend-challenge",
                icon: Github,
            },
        ],
        technologies: ["NestJS", "TypeScript", "Redis", "PostgreSQL", "Docker", "Swagger"],
    },
    {
        title: "Events Management API",
        description:
            "A comprehensive REST API built with NestJS for managing events and attendees. Includes user authentication and MySQL database integration for reliable data storage.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&h=600&fit=crop",
        links: [
            {
                name: "GitHub Repository",
                url: "https://github.com/victormrtns/nest-events-api",
                icon: Github,
            },
        ],
        technologies: ["NestJS", "TypeScript", "MySQL", "Docker", "TypeORM"],
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const projectVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export const ProjectsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section
            ref={ref}
            id="projects"
            className="min-h-screen flex items-center py-24"
        >
            <div className="container px-4 mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    <div className="text-center space-y-4">
                        <motion.h2
                            variants={projectVariants}
                            className="text-4xl font-bold bg-gradient-to-r from-[#3943B7] to-[#6D74D9]
                bg-clip-text text-transparent"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p variants={projectVariants} className="text-muted-foreground max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and experience
                        </motion.p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={projectVariants}
                                whileHover={{ y: -5 }}
                                className="group relative bg-background rounded-xl border h-full
                         transition-all duration-300 hover:border-[#3943B7]/50 hover:shadow-lg
                         hover:shadow-[#3943B7]/5 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300
                             group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4 flex-1 flex flex-col">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground flex-1">{project.description}</p>

                                    <div className="space-y-4">
                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="bg-[#3943B7]/10 hover:bg-[#3943B7]/20 text-[#3943B7]"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex flex-col gap-2">
                                            {project.links.map((link, i) => (
                                                <motion.a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-muted-foreground
                                   hover:text-[#3943B7] transition-colors"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <link.icon className="w-4 h-4" />
                                                    {link.name}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-[#3943B7]/5 pointer-events-none"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
})

ProjectsSection.displayName = "ProjectsSection"

