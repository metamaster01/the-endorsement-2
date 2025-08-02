import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryClientProvider } from "@/components/providers/react-query-provider"
import ResizableNavigationExample from "@/components/ResizableNavigationExample"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
    title: "Merkurie Digital Canvas",
    description: "Digital agency creating innovative web solutions",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className="font-inter antialiased">
                <ReactQueryClientProvider>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
                        <ResizableNavigationExample />
                        {children}
                    </TooltipProvider>
                </ReactQueryClientProvider>
            </body>
        </html>
    )
} 