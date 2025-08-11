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
import FooterSection from '@/components/footer'
// import CelebritySection from "@/components/CelebritySection"

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                {/* < CelebritySection/> */}
                <WhyChooseSection />
                <IndustriesSection />
                <TeamSection />
                <ProcessSection />
                <PortfolioSection />
                <ContactSection />
                <FooterSection />
        </div>
    )
} 