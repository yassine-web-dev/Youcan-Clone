'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { i18n, Locale } from '@/i18n.config'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ChevronUp, ChevronDown } from 'lucide-react'



interface LocaleSwitcherProps {
    lang: Locale
}

const LocaleSwitcher: React.FunctionComponent<LocaleSwitcherProps> = ({ lang }) => {

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const url = `${pathname}?${searchParams}`
    const [value, setValue] = useState("")
    const langs = { "en": "English", "fr": "Français", "ar": "العربية" }

    const redirectedPathname = (locale: string) => {
        if(!pathname) return '/'
        const segments = pathname.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    useEffect(() => {
        const lgmenu = document.querySelector('.language-menu')
        const btn = lgmenu?.children[0]
        const chevDown = btn?.children[1]
        const chevUp = btn?.children[2]
        const menu = lgmenu?.children[1]
        const menuItms = document.querySelectorAll('.language-menu .menu li')

        // Add bg to select-item based on current lang
        menuItms.forEach(li => {
            if(li.id === lang) {
                li.classList.add("bg-primary")
                li.classList.add("text-white")
            }
        })

        // Open menulist when the button clicked function
        const handleClick = () => {
            if(menu?.classList.contains("hidden")) {
                menu?.classList.remove("hidden")
                chevDown?.classList.add("hidden")
                chevUp?.classList.remove("hidden")
            }
            else {
                menu?.classList.add("hidden")
                chevDown?.classList.remove("hidden")
                chevUp?.classList.add("hidden")
            }
        }
        // hide menulist when anywhere in the html dom that doesnt contain the class 'eligible' is clicked
        const handleClick1 = (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement
            if(!targetElement?.classList.contains("eligible")) {
                menu?.classList.add("hidden")
                chevDown?.classList.remove("hidden")
                chevUp?.classList.add("hidden")
            }
        }

        // Open menulist when the button clicked
        btn?.addEventListener('click', handleClick)
        document.documentElement.addEventListener('click', handleClick1)
        
        // Clear useEffect
        return () => {
            btn?.removeEventListener('click', handleClick)
            document.documentElement.removeEventListener('click', handleClick1)
        }
    }, [])

    return (
        <div className="language-menu relative">
            <div className="select-trigger eligible flex items-center gap-2 cursor-pointer">
                <Button className='eligible h-full rounded-none p-0 text-base text-black font-normal bg-transparent hover:bg-transparent'>{langs[lang]}</Button>
                <ChevronDown className='eligible w-4' />
                <ChevronUp className='eligible hidden w-4' />
            </div>
            <ul className='menu bg-white absolute z-30 top-7 -left-2 w-[120px] mt-2 shadow-sm border rounded-md p-3 hidden text-center text-sm'>
                {
                    i18n.locales.map((locale, i) => (
                        <Link key={i} href={redirectedPathname(locale)}>
                            <li className='py-[6px] px-3 rounded-md hover:font-bold' id={locale} key={locale}>
                                {langs[locale]}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default LocaleSwitcher;