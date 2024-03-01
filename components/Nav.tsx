import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SidebarLocaleSwitch from "./Sidebar-Locale-Switch"
import { Locale } from "@/i18n.config"
import Link from "next/link"

interface NavProps {
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

const Nav: React.FunctionComponent<NavProps> = ({ lang, navbar, nav }) => {
    
    let direction = ""
    const dirs = {ltr: "left", rtl: "right"}

    if(lang !== "ar") {
        direction = dirs.ltr
    }
    else {
        direction = dirs.rtl
    }
    
    return (

        <nav>
            <Sheet>
                <SheetTrigger asChild>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-align-justify cursor-pointer">
                        <line x1="1" x2="23" y1="6" y2="6"/>
                        <line x1="1" x2="23" y1="12" y2="12"/>
                        <line x1="1" x2="23" y1="18" y2="18"/>
                    </svg>
                </SheetTrigger>
                <SheetContent className="!w-[300px] text-center" side={direction}>
                    <SheetFooter className="text-[#333]">
                        <div className="sheet-header flex px-4 pb-11">
                            <Link href={`/${lang}`}>
                                <SheetClose className="ring-offset-background focus:ring-0 focus:ring-transparent focus:ring-offset-0 outline-none">
                                    <p className="text-black font-medium text-[19px]">{navbar.leftmenu.logo}</p>
                                </SheetClose>
                            </Link>
                        </div>
                        <div className="language-box">
                            <div className="px-6">
                                <span className="title text-center font-medium">{nav.main.title}</span>
                                <SidebarLocaleSwitch lang={lang} />
                            </div>
                            <ul className="sidebar-pages-list py-8">
                                <li className="sidebar-item">
                                    <Link href={`/${lang}/features`}>
                                        <SheetClose className="w-full ring-offset-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0 outline-none">
                                            <p className="border-t-[1px] border-b-[1px] py-5 hover:bg-primary hover:text-white">{navbar.leftmenu.leftlist.navigation.features}</p>
                                        </SheetClose>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link href={`/${lang}/pricing`}>
                                        <SheetClose className="w-full ring-offset-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0 outline-none">
                                            <p className="border-b-[1px] py-5 hover:bg-primary hover:text-white">{navbar.leftmenu.leftlist.navigation.pricing}</p>
                                        </SheetClose>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="admin grid gap-4 px-4">
                            <Link href={`/${lang}/signup`}>
                                <SheetClose className="w-full py-2 ring-offset-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0 inline-flex items-center justify-center whitespace-nowrap duration-500 rounded-lg text-base font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 outline-none">
                                    {navbar.rightmenu.rightlist.navigation.signup}
                                </SheetClose>
                            </Link>
                            <Link href={`/${lang}/login`}>
                                <SheetClose className="w-full py-2 ring-offset-transparent focus:ring-0 focus:ring-transparent focus:ring-offset-0 inline-flex items-center justify-center whitespace-nowrap rounded-lg font-normal text-base transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent text-[#333] duration-500 hover:bg-[#EDF6F9] border outline-none">
                                    {navbar.rightmenu.rightlist.navigation.login}
                                </SheetClose>
                            </Link>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Nav;