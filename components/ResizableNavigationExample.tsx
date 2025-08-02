// 

"use client";
import React, { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton,
} from "./resizable-navbar";

const ResizableNavigationExample = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigationItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Portfolio", link: "#portfolio" },
        { name: "Team", link: "#team" },
        { name: "Contact", link: "#contact" },
    ];

    const handleMobileNavToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMobileNavClose = () => {
        setIsOpen(false);
    };

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <div className="hidden md:flex items-center space-x-8">
                    {navigationItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="text-white text-sm font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <NavbarButton variant="merkurie">
                    Book Consultation
                </NavbarButton>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isOpen}
                        onClick={handleMobileNavToggle}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isOpen}
                    onClose={handleMobileNavClose}
                >
                    {navigationItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            onClick={handleMobileNavClose}
                            className="text-merkurie-light hover:text-merkurie-accent transition-colors text-sm font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                    <NavbarButton
                        variant="merkurie"
                        className="w-full justify-center mt-4"
                    >
                        Book Consultation
                    </NavbarButton>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
};

export default ResizableNavigationExample;
