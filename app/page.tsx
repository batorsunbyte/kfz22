import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroHeader from '@/components/HeroHeader'
import ScrollCanvas3D from '@/components/ScrollCanvas3D'
import ErrorBoundary from '@/components/ErrorBoundary'
import LocalBusinessJsonLd from '@/components/JsonLd/LocalBusiness'

const IntroSection = dynamic(() => import('@/components/sections/IntroSection'), {
    loading: () => <div style={{ minHeight: '500px' }} />
})
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'), {
    loading: () => <div style={{ minHeight: '600px' }} />
})
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
    loading: () => <div style={{ minHeight: '600px' }} />
})
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
    loading: () => <div style={{ minHeight: '600px' }} />
})
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
    loading: () => <div style={{ minHeight: '600px' }} />
})
const GalleryTeaser = dynamic(() => import('@/components/sections/GalleryTeaser'), {
    loading: () => <div style={{ minHeight: '500px' }} />
})
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'), {
    loading: () => <div style={{ minHeight: '500px' }} />
})
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
    loading: () => <div style={{ minHeight: '600px' }} />
})
const Footer = dynamic(() => import('@/components/Footer'), {
    loading: () => <div style={{ minHeight: '300px' }} />
})

export default function Home() {
    return (
        <main className="min-h-screen">
            <LocalBusinessJsonLd />
            <Navigation />

            {/* SEO-critical H1 + local trust banner above the animation */}
            <div id="home">
                <HeroHeader />
            </div>

            {/* 3D Assembly Animation */}
            <ErrorBoundary>
                <ScrollCanvas3D />
            </ErrorBoundary>

            <ErrorBoundary>
                <IntroSection />
                <PricingSection />
                <ServicesSection />
                <AboutSection />
                <GalleryTeaser />
                <TestimonialsSection />
                <FaqSection />
                <ContactSection />
            </ErrorBoundary>

            <Footer />
        </main>
    )
}
