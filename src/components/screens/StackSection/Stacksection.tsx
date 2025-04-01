import React from "react"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const technologies = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Web Development",
        gradient: "from-[#61DAFB]/20 to-[#61DAFB]/5",
    },
    {
        name: "React Native",
        icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
        description: "Mobile Development",
        gradient: "from-[#61DAFB]/20 to-[#61DAFB]/5",
    },
    {
        name: "Nest.js",
        icon: "https://nestjs.com/img/logo-small.svg",
        description: "Backend Development",
        gradient: "from-[#E0234E]/20 to-[#E0234E]/5",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Runtime Environment",
        gradient: "from-[#689F63]/20 to-[#689F63]/5",
    },
    {
        name: ".NET",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        description: "Backend Development",
        gradient: "from-[#512BD4]/20 to-[#512BD4]/5",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "Development Language",
        gradient: "from-[#3178C6]/20 to-[#3178C6]/5",
    },
    {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        description: "Cloud Services",
        gradient: "from-[#FF9900]/20 to-[#FF9900]/5",
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        description: "Containerization",
        gradient: "from-[#2496ED]/20 to-[#2496ED]/5",
    },
    {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        description: "UI/UX Design",
        gradient: "from-[#F24E1E]/20 to-[#F24E1E]/5",
    },
]

const TechCard = ({ tech }: { tech: (typeof technologies)[0] }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`
        flex-[0_0_200px] min-h-[240px] mx-2 
        flex flex-col items-center p-4 
        rounded-xl border bg-gradient-to-b ${tech.gradient}
        backdrop-blur-sm hover:border-[#3943B7] 
        transition-all duration-300 
        hover:shadow-lg hover:shadow-[#3943B7]/10
        dark:hover:shadow-[#3943B7]/20
      `}
        >
            <div className="relative size-16 mb-4 group">
                <div
                    className="absolute inset-0 bg-[#3943B7]/10 rounded-full -z-10
          group-hover:scale-110 transition-transform duration-300"
                />
                <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-full h-full object-contain p-2 drop-shadow-xl"
                    loading="lazy"
                />
            </div>
            <h3
                className="text-base font-semibold mb-1 bg-gradient-to-r from-[#3943B7] to-[#3943B7]/70
        bg-clip-text text-transparent"
            >
                {tech.name}
            </h3>
            <p className="text-xs text-muted-foreground text-center">{tech.description}</p>
        </motion.div>
    )
}

export const StackSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section
            ref={ref}
            id="stack"
            className="min-h-screen flex items-center bg-gradient-to-b from-muted/50 to-background"
        >
            <div className="w-full space-y-12">
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold bg-gradient-to-r from-[#3943B7] to-[#3943B7]/70
              bg-clip-text text-transparent"
                    >
                        Tech Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Technologies and tools I use to bring products to life
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto px-4">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                            skipSnaps: true,
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="scrollbar-hide">
                            {technologies.map((tech) => (
                                <CarouselItem key={tech.name} className="md:basis-1/3 lg:basis-1/4">
                                    <TechCard tech={tech} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious
                                className="left-2 bg-background/80 backdrop-blur-sm
                hover:bg-[#3943B7] hover:text-white transition-all duration-300"
                            />
                            <CarouselNext
                                className="right-2 bg-background/80 backdrop-blur-sm
                hover:bg-[#3943B7] hover:text-white transition-all duration-300"
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
})

StackSection.displayName = "StackSection"

