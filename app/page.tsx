import ResizableNavigationExample from '@/components/ResizableNavigationExample'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import IndustriesSection from '@/components/IndustriesSection'
import ProcessSection from '@/components/ProcessSection'
import TeamSection from '@/components/TeamSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
    return (
        <div className="min-h-screen bg-merkurie-background">
            <ResizableNavigationExample />
            {/* Add padding-top to account for fixed navbar */}
            <div className="pt-24">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <WhyChooseSection />
                <IndustriesSection />
                <ProcessSection />
                <TeamSection />
                <PortfolioSection />
                <ContactSection />
            </div>
        </div>
    )
} 