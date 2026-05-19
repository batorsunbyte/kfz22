export interface Translations {
    nav: {
        home: string
        services: string
        offers: string
        about: string
        reviews: string
        contact: string
        imprint: string
        ueberUns: string
        datenschutz: string
        galerie: string
    }

    hero: {
        premiumService: string
        motorTransmission: string
        brakeSuspension: string
        electronicDiag: string
        expressService: string
        quickRepair: string
        loading: string
        special: string
        offer: string
        specialOffer: string
        viewPrices: string
        callNow: string
        callNowShort: string
        phoneNumber: string
        planRoute: string
        planRouteShort: string
        planRouteDesc: string
        scroll: string
        pruefstelle: string
        h1: string
        h1Highlight: string
        h1Sub: string
    }

    intro: {
        kicker: string
        heading: string
        body1: string
        body2: string
        feature1Title: string
        feature1Desc: string
        feature2Title: string
        feature2Desc: string
        feature3Title: string
        feature3Desc: string
    }

    faq: {
        kicker: string
        heading: string
        subheading: string
        items: readonly {
            readonly question: string
            readonly answer: string
        }[]
    }

    pricing: {
        topOffers: string
        servicePackages: string
        offerBadge: string
        insteadOf: string
        callNow: string
        disclaimer: string
        items: readonly {
            readonly title: string
            readonly description: string
        }[]
    }

    services: {
        ourExpertise: string
        service: string
        meister: string
        betrieb: string
        certifiedQuality: string
        items: {
            komplettservice: string
            reifenservice: string
            oelservice: string
            pickerl: string
            klimaanlage: string
            zahnriemen: string
            bremsen: string
            batterie: string
            ersatzteile: string
        }
    }

    about: {
        brand: string
        title: string
        stampCertified: string
        stampMeister: string
        stampBetrieb: string
        heading: string
        description: string
        certs: {
            meisterbrief: string
            systemElektronik: string
            diagnoseExpert: string
            bezirk: string
        }
        experience: string
        years: string
        features: readonly {
            readonly title: string
            readonly desc: string
        }[]
        location: string
        consultOnSite: string
        contactBtn: string
    }

    testimonials: {
        customerVoices: string
        reviews: string
        verified: string
        percent: string
        satisfied: string
        trustedPro: string
        qualityGuaranteed: string
        items: readonly {
            readonly customer: string
            readonly vehicle: string
            readonly review: string
            readonly service: string
            readonly date: string
        }[]
    }

    contact: {
        accent: string
        title: string
        locationContact: string
        addressLabel: string
        addressLine1: string
        addressLine2: string
        phone: string
        email: string
        emergency: string
        emergencyDesc: string
        hours: string
        monFri: string
        sat: string
        sun: string
        closed: string
        hoursNote: string
        bookOnlineKicker: string
        bookOnlineHeading: string
        bookOnlineDesc: string
        bookOnlineCTA: string
        bookOnlineNote: string
        orCallDirectly: string
    }

    callback: {
        heading: string
        nameLabel: string
        namePlaceholder: string
        phoneLabel: string
        phonePlaceholder: string
        messageLabel: string
        messagePlaceholder: string
        submit: string
        successMessage: string
        callNow: string
        planRoute: string
    }

    footer: {
        meisterbetrieb: string
        description: string
        original: string
        established: string
        vienna22: string
        navigation: string
        navLinks: readonly {
            readonly label: string
            readonly href: string
        }[]
        serviceFocus: string
        serviceItems: readonly string[]
        contactHeading: string
        phone247: string
        copyright: string
        imprint: string
        privacy: string
    }

    cookieBanner: {
        title: string
        message: string
        accept: string
        learnMore: string
    }

    pages: {
        backHome: string
        imprint: {
            title: string
            subtitle: string
            intro: string
            companyHeading: string
            contactHeading: string
            legalHeading: string
            scopeHeading: string
            disclaimerHeading: string
            disclaimerContent: string
            disclaimerLinks: string
            disclaimerCopyright: string
            disclaimerValidity: string
            odrHeading: string
            odrContent: string
            ownerLabel: string
            companyNameLabel: string
            legalFormLabel: string
            addressLabel: string
            businessLocationLabel: string
            phoneLabel: string
            emailLabel: string
            vatLabel: string
            registryLabel: string
            registryCourtLabel: string
            managementLabel: string
            businessPurposeLabel: string
            chamberLabel: string
            authorityLabel: string
            tradeRegulationLabel: string
            tradeRegulationValue: string
            placeholder: string
            verifyNote: string
        }
        ueberUns: {
            title: string
            subtitle: string
            introHeading: string
            introText: string
            storyHeading: string
            storyText: string
            valuesHeading: string
            values: readonly {
                readonly title: string
                readonly desc: string
            }[]
            ctaHeading: string
            ctaText: string
            ctaButton: string
        }
        kontakt: {
            title: string
            subtitle: string
        }
        galerie: {
            title: string
            subtitle: string
            teaserKicker: string
            teaserHeading: string
            teaserSubheading: string
            teaserCta: string
            placeholderText: string
            lightboxClose: string
            lightboxPrev: string
            lightboxNext: string
        }
        datenschutz: {
            title: string
            subtitle: string
            intro: string
            controllerHeading: string
            controllerText: string
            dataCollectionHeading: string
            dataCollectionIntro: string
            serverLogsTitle: string
            serverLogsText: string
            cookiesHeading: string
            cookiesText: string
            cookiesNote: string
            contactHeading: string
            contactText: string
            externalServicesHeading: string
            externalServicesIntro: string
            bookingsTitle: string
            bookingsText: string
            mapsTitle: string
            mapsText: string
            rightsHeading: string
            rightsIntro: string
            rightsList: readonly string[]
            complaintHeading: string
            complaintText: string
            updatedHeading: string
            updatedText: string
        }
    }
}
