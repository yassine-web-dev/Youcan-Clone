"use client"

import react from 'react'
import { Locale } from "@/i18n.config"
import Link from "next/link"
import { Button } from "./ui/button"
import LocaleSwitcher from "./locale-switcher"
import Nav from './Nav'


interface NavbarHelperProps {
    lang: Locale,
    navbar: {
        leftmenu: {
            logo: string,
            leftlist: {
                navigation: {
                    features: string,
                    pricing: string
                }
            }
        },
        rightmenu: {
            rightlist: {
                navigation: {
                    signup: string,
                    login: string,
                    langmenu: {
                        en: string,
                        fr: string,
                        ar: string
                    }
                }
            }
        }
    },
    nav: {
        main: {
          title: string
        }
    }
}

const NavbarHelper: React.FunctionComponent<NavbarHelperProps> = ({ lang, navbar, nav }) => {

    react.useEffect(() => {
        const handleScroll = () => {
            // var adjustablePaddingElement = document.getElementById('adjustablePaddingElement');
            const fixedHeader = document.querySelector('.fixed-header');

            // Set a scroll threshold as needed
            const scrollThreshold = 20;

            // Check if the scroll position is below the threshold
            if (window.scrollY > scrollThreshold) {
                // Add a class to the element when scrolled
                fixedHeader?.classList.add("fixed")
                fixedHeader?.classList.add("w-full")
                fixedHeader?.classList.add("bg-white")
                fixedHeader?.classList.add("shadow-lg")
                // fixedHeader?.classList.add("pt-10")
                fixedHeader?.classList.add("transition-all")
                fixedHeader?.classList.add("duration-500")
                // adjustablePaddingElement.classList.add('adjust-padding');
            } else {
                // Remove the class when not scrolled
                fixedHeader?.classList.remove("fixed")
                fixedHeader?.classList.remove("w-full")
                fixedHeader?.classList.remove("bg-white")
                fixedHeader?.classList.remove("shadow-lg")
                // fixedHeader?.classList.remove("pt-10")
                fixedHeader?.classList.remove("transition-all")
                fixedHeader?.classList.remove("duration-500")
                // adjustablePaddingElement.classList.remove('adjust-padding');
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        // Clear useEffect
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav className="navbar fixed-header z-30 py-3">
            <div className="container">
                <div className="flex justify-between text-[#333] items-center">
                    <div className="left-menu flex items-center">
                        <div className="logo text-primary text-2xl font-medium mr-10 rtl:mr-0 rtl:ml-10">
                            <Link href={`/${lang}`}>{navbar.leftmenu.logo}</Link>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="left-list text-base flex items-center">
                                <li className="mr-10 rtl:mr-0 rtl:ml-10">
                                    <Link href={`/${lang}/features/`}>{navbar.leftmenu.leftlist.navigation.features}</Link>
                                </li>
                                <li>
                                    <Link href={`/${lang}/pricing/`}>{navbar.leftmenu.leftlist.navigation.pricing}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-menu hidden lg:block">
                        <div className="">
                            <ul className="right-list flex items-center">
                                <li className="mr-3 rtl:mr-0 rtl:ml-3">
                                    <Button className="text-base font-normal duration-500">
                                        <Link href={`/${lang}/signup`}>{navbar.rightmenu.rightlist.navigation.signup}</Link>
                                    </Button>
                                </li>
                                <li className="mr-3 rtl:mr-0 rtl:ml-3">
                                    <Button className="bg-transparent font-normal duration-500 text-base hover:bg-[#EDF6F9] text-black border">
                                        <Link href={`/${lang}/login`}>{navbar.rightmenu.rightlist.navigation.login}</Link>
                                    </Button>
                                </li>
                                <li>
                                    <LocaleSwitcher lang={lang} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Nav lang={lang} navbar={navbar} nav={nav} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarHelper;