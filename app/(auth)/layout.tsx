import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'

// Search Engine Optimization (SEO)
export const metadata = {
    title: 'Threads Clone',
    description: 'Clone of threads with Next.js 13 and TypeScript'
}

// define fonts here...
const inter = Inter({subsets: ['latin']})

export default function RootLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}