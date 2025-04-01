import React from "react"

export const ContactSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} id="contact" className="min-h-screen flex items-center bg-muted/50">
            <div className="space-y-8">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <div className="max-w-md space-y-4">
                    <p className="text-muted-foreground">
                        I'm always open to new opportunities and interesting projects. Feel free to reach out!
                    </p>
                    <p className="text-muted-foreground">
                        Email: john.doe@example.com
                        <br />
                        LinkedIn: /in/johndoe
                        <br />
                        GitHub: @johndoe
                    </p>
                </div>
            </div>
        </section>
    )
})

ContactSection.displayName = "ContactSection"

