'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageToggle from '@/components/LanguageToggle'

type NavItem = { name: string; anchor?: string; route?: string }

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const { t } = useTranslation()
    const pathname = usePathname()
    const isHome = pathname === '/'

    const navItems: NavItem[] = [
        { name: t.nav.home, anchor: '#home' },
        { name: t.nav.services, anchor: '#services' },
        { name: t.nav.offers, anchor: '#pricing' },
        { name: t.nav.galerie, route: '/galerie' },
        { name: t.nav.about, anchor: '#about' },
        { name: t.nav.reviews, anchor: '#reviews' },
        { name: t.nav.contact, anchor: '#contact' },
    ]

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newDark = !isDark
        setIsDark(newDark)
        if (newDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const scrollToSection = useCallback((href: string) => {
        const element = document.querySelector(href)
        if (element) {
            const headerOffset = 64
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            setIsOpen(false)
        }
    }, [])

    const navItemClasses = "text-gray-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-[#ffd100] px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
    const mobileNavItemClasses = "text-gray-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-[#ffd100] block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"

    const renderDesktopItem = (item: NavItem) => {
        const key = item.route ?? item.anchor ?? item.name

        // Route-based items always navigate (e.g. /galerie)
        if (item.route) {
            return (
                <Link key={key} href={item.route} className={navItemClasses}>
                    {item.name}
                </Link>
            )
        }

        // Anchor-based items: scroll on home, navigate-with-anchor on subpages
        if (isHome) {
            return (
                <button
                    key={key}
                    onClick={() => item.anchor && scrollToSection(item.anchor)}
                    className={navItemClasses}
                >
                    {item.name}
                </button>
            )
        }
        return (
            <Link key={key} href={`/${item.anchor}`} className={navItemClasses}>
                {item.name}
            </Link>
        )
    }

    const renderMobileItem = (item: NavItem) => {
        const key = item.route ?? item.anchor ?? item.name

        if (item.route) {
            return (
                <Link
                    key={key}
                    href={item.route}
                    onClick={() => setIsOpen(false)}
                    className={mobileNavItemClasses}
                >
                    {item.name}
                </Link>
            )
        }

        if (isHome) {
            return (
                <button
                    key={key}
                    onClick={() => item.anchor && scrollToSection(item.anchor)}
                    className={mobileNavItemClasses}
                >
                    {item.name}
                </button>
            )
        }
        return (
            <Link
                key={key}
                href={`/${item.anchor}`}
                onClick={() => setIsOpen(false)}
                className={mobileNavItemClasses}
            >
                {item.name}
            </Link>
        )
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Area - links to home */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="block">
                            <span className="text-2xl font-black text-[#1e293b] dark:text-white tracking-tighter italic">
                                KFZ <span className="text-[#ffd100]">Technik 22</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map(renderDesktopItem)}
                        </div>

                        {/* Language Toggle */}
                        <LanguageToggle />

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-[#ffd100] hover:scale-110 transition-all duration-300 shadow-sm group"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu and Theme Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <LanguageToggle />
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-[#ffd100]"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-slate-400 hover:text-emerald-600 p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen ? (
                <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map(renderMobileItem)}
                    </div>
                </div>
            ) : null}
        </nav>
    )
}
