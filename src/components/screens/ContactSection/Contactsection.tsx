"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const ContactSection = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }
        if (!formData.message.trim()) newErrors.message = "Message is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return

        setFormStatus("submitting")

        const serviceID = import.meta.env.VITE_SERVICE_ID
        const templateID = import.meta.env.VITE_TEMPLATE_ID
        const userID = import.meta.env.VITE_PUBLIC_KEY

        try {
            await emailjs.send(
                serviceID,
                templateID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                userID,
            )

            setFormStatus("success")
            setFormData({ name: "", email: "", message: "" })

            setTimeout(() => setFormStatus("idle"), 5000)
        } catch (error) {
            console.error("Error sending email:", error)
            setFormStatus("error")
            setTimeout(() => setFormStatus("idle"), 5000)
        }
    }

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
        {
            name: "Email",
            icon: Mail,
            url: "mailto:vmhugo00@gmail.com",
        },
    ]

    return (
        <section ref={ref} id="contact" className="min-h-screen py-20 flex items-center">
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
                            Get In Touch
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                            I'm always open to new opportunities and interesting projects. Feel free to reach out!
                        </motion.p>
                    </div>

                    {/* Contact Form and Info */}
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Form */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="bg-card border rounded-xl p-6 shadow-sm">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? "border-red-500" : ""}
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? "border-red-500" : ""}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={errors.message ? "border-red-500" : ""}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#3943B7] hover:bg-[#3943B7]/90 text-white"
                                        disabled={formStatus === "submitting"}
                                    >
                                        {formStatus === "submitting" ? (
                                            <span className="flex items-center gap-2">
                        <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                          <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                          ></circle>
                          <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                                        )}
                                    </Button>

                                    {/* Form Status Messages */}
                                    {formStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md mt-4"
                                        >
                                            <CheckCircle className="h-5 w-5" />
                                            <span>Message sent successfully! I'll get back to you soon.</span>
                                        </motion.div>
                                    )}

                                    {formStatus === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md mt-4"
                                        >
                                            <AlertCircle className="h-5 w-5" />
                                            <span>There was an error sending your message. Please try again later.</span>
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={fadeInUp} className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Contact Information</h3>
                                <p className="text-muted-foreground">
                                    Feel free to reach out through the form or directly via email or social media.
                                </p>

                                <div className="space-y-4 mt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3943B7]/10 flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-[#3943B7]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <a
                                                href="mailto:vmhugo00@gmail.com"
                                                className="text-muted-foreground hover:text-[#3943B7] transition-colors"
                                            >
                                                vmhugo00@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Connect With Me</h3>
                                <p className="text-muted-foreground">
                                    Follow me on social media to see my latest projects and updates.
                                </p>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full border
                               hover:border-[#3943B7] hover:bg-[#3943B7]/5 transition-colors"
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <social.icon className="h-4 w-4 text-[#3943B7]" />
                                            <span>{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 pt-6">
                                <h3 className="text-xl font-semibold">Let's Work Together</h3>
                                <p className="text-muted-foreground">
                                    I'm currently available for freelance work and open to new opportunities. If you have a project that
                                    you want to get started, think you need my help with something, or just want to say hello, then get in
                                    touch.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
})

ContactSection.displayName = "ContactSection"

