import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config'
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
    lang: Locale
}
interface IconsProps {
    src: string,
    link: string
}

const socialIcons: IconsProps[] = [
    {
        src: "https://static-portal.youcan.shop/images/new_portal_design/icons/linkedin-icon.svg",
        link: "https://www.linkedin.com/company/youcandotshop/"
    },
    {
        src: "https://static-portal.youcan.shop/images/new_portal_design/icons/facebook-icon.svg",
        link: "https://www.facebook.com/Youcandotshop"
    },
    {
        src: "https://static-portal.youcan.shop/images/new_portal_design/icons/instagram-icon.svg",
        link: "https://www.instagram.com/youcandotshop/"
    },
    {
        src: "https://static-portal.youcan.shop/images/new_portal_design/icons/twitter-icon.svg",
        link: "https://twitter.com/Youcandotshop"
    },
    {
        src: "https://static-portal.youcan.shop/images/new_portal_design/icons/youtube-icon.svg",
        link: "https://www.youtube.com/c/Youcandotshop"
    }
]

const Footer: React.FunctionComponent<FooterProps> = async ({ lang }) => {

    const { footer } = await getDictionary(lang)

    return (

        <footer className="bg-[#333] pt-[50px] pb-[32px]">
            <div className="container">
                <section className="footer-navigation text-lg text-white grid grid-cols-2 gap-16 lg:grid-cols-4 lg:gap-0">
                    <div className="footerlist">
                        <div className="subhead text-base lg:text-lg font-medium mb-4 lg:mb-2">{footer.navigation.footerlist1.subhead}</div>
                        <ul className="list text-sm lg:text-base text-[#DDD]">
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/aboutus`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist1.list.Aboutus}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/features`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist1.list.Features}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/pricing`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist1.list.Pricing}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/careers`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist1.list.Careers}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/culture`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist1.list.LifeatYouCan}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <div className="subhead text-base lg:text-lg font-medium mb-4 lg:mb-2">{footer.navigation.footerlist2.subhead}</div>
                        <ul className="list text-sm lg:text-base text-[#DDD]">
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/contactus`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.Contactus}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/help`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.HelpCenter}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`https://developer.youcan.shop/`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.Developers}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/blog`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.Blog}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/faq`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.FAQs}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/press`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.Press}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/ecom`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist2.list.LearnEcommerce}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <div className="subhead text-base lg:text-lg font-medium mb-4 lg:mb-2">{footer.navigation.footerlist3.subhead}</div>
                        <ul className="list text-sm lg:text-base text-[#DDD]">
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/partners`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist3.list.Partnersportal}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/affiliate`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist3.list.AffiliateandReferral}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/ambassadors`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist3.list.YouCanAmbassadors}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/awards`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist3.list.Awards}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/experts`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist3.list.Becomeanexpert}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <div className="subhead text-base lg:text-lg font-medium mb-4 lg:mb-2">{footer.navigation.footerlist4.subhead}</div>
                        <ul className="list text-sm lg:text-base text-[#DDD]">
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/conditions`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist4.list.Termsofuse}</p>
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-2">
                                <Link href={`/${lang}/privacy`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist4.list.Privacypolicy}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/cookies`}>
                                    <p className="inline hover:border-b-[1px] hover:border-[#DDD]">{footer.navigation.footerlist4.list.Cookies}</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <div className="separator w-[500px] mx-auto mt-14 mb-8">
                    <hr className="border-[hsla(0,0%,100%,.4)]" />
                </div> */}
                <section className="text-white text-center">
                    <div className="channels max-w-[500px] mx-auto mt-14 mb-12">
                        <p className="title font-medium pt-8 border-t-[1px] border-[hsla(0,0%,100%,.4)]">{footer.container.title}</p>
                        <ul className="channels-list flex justify-center gap-2 mt-4">
                            {
                                socialIcons.map((icon, i) => (
                                    <li key={i} className="rounded-lg p-1 transition-all duration-150 contrast-[65%] grayscale hover:grayscale-0 hover:contrast-100">
                                        <Link href={`${icon.link}`} target={`_blank`}>
                                            <Image src={`${icon.src}`} width={28} height={28} quality={100} alt={`Icon`} />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="copyright text-[hsla(0,0%,100%,.4)] text-sm lg:text-base">&#169; 2024 YouCan&#46; {footer.container.copyright}</div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;