import React from "react"

export const AboutSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} id="about" className="min-h-screen flex items-center bg-muted/50">
            <div className="space-y-8">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Skills</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Frontend: React, Next.js, TypeScript</li>
                            <li>Backend: Node.js, Express, PostgreSQL</li>
                            <li>DevOps: Docker, AWS, CI/CD</li>
                            <li>Tools: Git, VS Code, Figma</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Experience</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>5+ years of professional web development experience</p>
                            <p>Led multiple successful projects from concept to deployment</p>
                            <p>Passionate about clean code and best practices</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

AboutSection.displayName = "AboutSection"

