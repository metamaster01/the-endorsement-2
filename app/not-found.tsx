import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-merkurie-background">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-merkurie-text">404</h1>
                <p className="text-xl text-merkurie-medium mb-4">Oops! Page not found</p>
                <Link
                    href="/"
                    className="text-merkurie-accent hover:text-merkurie-coral underline transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    )
} 