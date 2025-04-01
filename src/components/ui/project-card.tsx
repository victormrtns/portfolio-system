interface ProjectCardProps {
    title: string
    description: string
}

export function ProjectCard({ title, description }: ProjectCardProps) {
    return (
        <div className="rounded-lg border bg-card p-6 space-y-4 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

