import { useEffect, useRef, useState } from "react"
import { SiteHeader } from "@/components/screens/SiteHeader/Siteheader"
import { AboutSection } from "@/components/screens/AboutSection/Aboutsection"
import { HeroSection } from "@/components/screens/HeroSection/Herosection"
import { ContactSection } from "@/components/screens/ContactSection/Contactsection"
import { ProjectsSection } from "@/components/screens/ProjectsSection/Projectssection"
import { StackSection } from "@/components/screens/StackSection/Stacksection"

const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
]

export default function HomePage() {
    const [activeSection, setActiveSection] = useState("home")
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    const handleNavigate = (id: string) => {
        setActiveSection(id)
        const section = sectionRefs.current[id]
        if (section) {
            const headerOffset = 80
            const elementPosition = section.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const pageTop = window.pageYOffset
            const pageBottom = pageTop + window.innerHeight
            const headerOffset = 80

            let selected = activeSection
            let maxVisibleHeight = 0

            Object.entries(sectionRefs.current).forEach(([id, section]) => {
                if (section) {
                    const rect = section.getBoundingClientRect()
                    const top = rect.top + pageTop
                    const bottom = rect.bottom + pageTop
                    const height = rect.height

                    // Calculate how much of the section is visible
                    const visibleTop = Math.max(pageTop + headerOffset, top)
                    const visibleBottom = Math.min(pageBottom, bottom)
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop)

                    // Update selected section if this one has more visible area
                    if (visibleHeight > maxVisibleHeight) {
                        maxVisibleHeight = visibleHeight
                        selected = id
                    }

                    // Special case for sections that take up most of the viewport
                    if (visibleHeight > height * 0.6) {
                        selected = id
                    }
                }
            })

            if (selected !== activeSection) {
                setActiveSection(selected)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Check initial position

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [activeSection])

    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <SiteHeader options={navigationItems} activeSection={activeSection} onNavigate={handleNavigate} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection ref={(el) => (sectionRefs.current["home"] = el)} />
                <AboutSection ref={(el) => (sectionRefs.current["about"] = el)} />
                <StackSection ref={(el) => (sectionRefs.current["stack"] = el)} />
                <ProjectsSection ref={(el) => (sectionRefs.current["projects"] = el)} />
                <ContactSection ref={(el) => (sectionRefs.current["contact"] = el)} />
            </main>
        </div>
    )
}

