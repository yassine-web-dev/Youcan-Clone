"use client"

import { Locale, i18n } from "@/i18n.config";
import react from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { SheetClose } from "./ui/sheet";

interface SidebarLocaleSwitchProps {
    lang: Locale
}

const SidebarLocaleSwitch: React.FunctionComponent<SidebarLocaleSwitchProps> = ({ lang }) => {

    const langs = { "en": "English", "fr": "Français", "ar": "العربية" }
    const pathname = usePathname()

    const redirectedPathname = (locale: string) => {
        if(!pathname) return '/'
        const segments = pathname.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    react.useEffect(() => {
        const langsList = document.querySelectorAll(".sidebar-language-list li")

        // Add bg to select-item based on current lang
        langsList.forEach(li => {
            if(li.id === lang) {
                li.classList.add("bg-primary")
                li.classList.add("text-white")
                li.classList.add("border-transparent")
            }
        })
    }, [lang])

    return (
        <ul className="sidebar-language-list flex justify-center gap-3 pt-4">
            {
                i18n.locales.map((locale, i) => (
                    <Link key={i} href={redirectedPathname(locale)}>
                        <SheetClose className="ring-offset-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0">
                            <li id={locale} key={locale} className="border rounded-lg py-[6px] px-[15px] text-[15px] transition-all duration-500 hover:border-[#333]">
                                {langs[locale]}
                            </li>
                        </SheetClose>
                    </Link>
                ))
            }
        </ul>
    )
}

export default SidebarLocaleSwitch;