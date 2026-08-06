"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import NavbarSwitch from "@/components/sections/NavbarSwitch";
import { useParams, useRouter } from "next/navigation";
import type { PortfolioLang, PortfolioType } from "@/types/types";

type Theme = "light" | "dark";

const navigation = [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [theme, setTheme] = useState<Theme>("light");
    const params = useParams<{ lang: PortfolioLang; mode: PortfolioType }>();
    const router = useRouter();

    const language: PortfolioLang = params.lang === "es" ? "es" : "en";
    const area: PortfolioType =  params.mode === "games" ? "games" : "web";
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        const initialTheme: Theme =
            savedTheme === "dark" ? "dark" : "light";

        setTheme(initialTheme);
        document.documentElement.dataset.theme = initialTheme;
    }, []);

    function changePortfolioRoute(nextLanguage: PortfolioLang, nextArea: PortfolioType) {
        const currentSection = window.location.hash;

        router.replace(`/${nextLanguage}/${nextArea}${currentSection}`, { scroll: false });
    }

    function toggleArea() {
        const nextArea: PortfolioType = area === "web" ? "games" : "web";

        changePortfolioRoute(language, nextArea);
    }

    function toggleTheme() {
    const nextTheme: Theme =
        theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
}

    function toggleLanguage() {
        const nextLanguage: PortfolioLang = language === "en" ? "es" : "en";

        changePortfolioRoute(nextLanguage, area);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            setHasScrolled(window.scrollY >= 80);
        };
        
        handleScroll();
        
        window.addEventListener("scroll", handleScroll,{passive: true});;
        
        return() =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        document.body.dataset.area = area;
        document.documentElement.lang = language;
    }, [area, language]);

    return (
        <Disclosure as="nav" className={`sticky top-0 text-foreground ${hasScrolled ? "bg-muted opacity-85" : ""}`}>
            <div className={`mx-auto max-w-screen-2xl sticky top-0 px-5 ${hasScrolled ? "bg-muted opacity-85" : ""} sm:px-8`}>
                <div className="flex h-20 items-center justify-between sticky top-0 ">
                    {/* Logo */}
                    <Link href={`/${language}/${area}`} className="shrink-0 font-newspaper text-xl font-bold text-primary">
                        {/* @TODO: change to logo */}
                        DF.
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navigation.map((item) => (
                            <Link className={`font-newspaper text-s tracking-[0.12em]  uppercase ${hasScrolled ? "text-white" : "text-muted"}
                                  transition-colors hover:text-primary`} key={item.name} href={item.href}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop switches */}
                    <div className="hidden items-center gap-5 font-newspaper text-xs tracking-[0.16em] uppercase xl:flex">
                        <NavbarSwitch
                            leftLabel="Web"
                            rightLabel="Game"
                            checked={area === "games"}
                            onChange={toggleArea}
                            ariaLabel="Switch development area"
                            hasScrolled={hasScrolled}
                        />

                        <span aria-hidden="true" className="h-7 w-px bg-border"/> 

                        <NavbarSwitch
                            leftLabel="Light"
                            rightLabel="Dark"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            ariaLabel="Switch color theme"
                            hasScrolled={hasScrolled}
                        />

                        <span aria-hidden="true" className="h-7 w-px bg-border"/>

                        <NavbarSwitch
                            leftLabel="En"
                            rightLabel="Es"
                            checked={language === "es"}
                            onChange={toggleLanguage}
                            ariaLabel="Switch language"
                            hasScrolled={hasScrolled}
                        />
                    </div>

                    {/* Mobile menu button */}
                    <DisclosureButton className="group inline-flex items-centerjustify-center rounded-md p-2
                    text-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent lg:hidden">
                        <span className="sr-only">
                            Open main menu
                        </span>

                        <Bars3Icon aria-hidden="true" className="size-6 group-data-open:hidden"/>

                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                    </DisclosureButton>
                </div>
            </div>

            {/* Mobile panel */}
            <DisclosurePanel className="border-t border-border bg-background px-5 py-5 lg:hidden">
                <div className="space-y-1">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 font-newspaper text-sm tracking-wider text-muted
                            uppercase hover:bg-surface hover:text-primary"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>

                {/* Mobile switches */}
                <div className="mt-5 flex flex-col items-start gap-4 border-t border-border pt-5
                    font-newspaper text-xs tracking-wider uppercase"
                >
                    <NavbarSwitch
                        leftLabel="Web"
                        rightLabel="Game"
                        checked={area === "games"}
                        hasScrolled={hasScrolled}
                        onChange={toggleArea}
                        ariaLabel="Switch development area"
                    />

                    <NavbarSwitch
                        leftLabel="Light"
                        rightLabel="Dark"
                        checked={theme === "dark"}
                        hasScrolled={hasScrolled}
                        onChange={toggleTheme}
                        ariaLabel="Switch color theme"
                    />

                    <NavbarSwitch
                        leftLabel="En"
                        rightLabel="Es"
                        checked={language === "es"}
                        hasScrolled={hasScrolled}
                        onChange={toggleLanguage}
                        ariaLabel="Switch language"
                    />
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}