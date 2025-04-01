import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {ModeToggle} from "@/components/screens/ModeToogle/Modetoogle.tsx";

interface SiteHeaderProps {
    options: { id: string; label: string }[]
    activeSection: string
    onNavigate: (id: string) => void
}

export function SiteHeader({ options, activeSection, onNavigate }: SiteHeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between px-4">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="mr-2 hover:bg-primary/10 text-foreground hover:text-primary"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[280px] p-0">
                            <SheetHeader className="p-4 border-b">
                                <SheetTitle className="text-left font-semibold">Navigation</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col p-4">
                                {options.map((option) => (
                                    <Button
                                        key={option.id}
                                        variant="ghost"
                                        className={cn(
                                            "justify-start h-11 px-4 mb-1 font-medium transition-colors",
                                            "text-foreground/70 hover:text-[#3943B7] hover:bg-[#3943B7]/10",
                                            activeSection === option.id && "bg-[#3943B7]/10 text-[#3943B7]",
                                        )}
                                        onClick={() => onNavigate(option.id)}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-1">
                        {options.map((option) => (
                            <li key={option.id}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "h-9 px-4 text-sm font-medium transition-colors",
                                        "text-foreground/70 hover:text-[#3943B7] hover:bg-[#3943B7]/10",
                                        activeSection === option.id &&
                                        "text-[#3943B7] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#3943B7]",
                                    )}
                                    onClick={() => onNavigate(option.id)}
                                >
                                    {option.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center justify-end">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
