import Link from "next/link";
import { Button } from "./ui/button";
import { CarouselPlugin } from "./CarouselPlugin";
import Image from "next/image";

interface HeroSectionProps {
    lang: string,
    herosection: {
        headingsection: {
            title: string,
            subtitle: string,
            marks: {
                marktext1: string,
                marktext2: string,
                marktext3: string
            },
            description: {
                button: string
            }
        },
        imagesection: {
            benifits: {
                benifit1: string,
                benifit2: string,
                benifit3: string
            }
        }
    }
}

const images = [
    "https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-1.webp",
    "https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-2.webp"
]
const mark = "https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg"

const HeroSection: React.FunctionComponent<HeroSectionProps> = ({ lang, herosection }) => {

    return (

        <>
        <div className="heading-section">
            <h1 className="heading text-[48px] font-bold">{herosection.headingsection.title}</h1>
            <p className="sub-heading text-[#444] text-base">{herosection.headingsection.subtitle}</p>
            <ul className="marks text-[#555] text-[15px]">
                <li className="mark flex items-center gap-3">
                    <Image src={mark} width={24} height={24} quality={100} alt="Easy store setup" />
                    <p className="mark-text">{herosection.headingsection.marks.marktext1}</p>
                </li>
                <li className="mark flex items-center gap-3">
                    <Image src={mark} width={24} height={24} quality={100} alt="No charge" />
                    <p className="mark-text">{herosection.headingsection.marks.marktext2}</p>
                </li>
                <li className="mark flex items-center gap-3">
                    <Image src={mark} width={24} height={24} quality={100} alt="The only e-commerce platform" />
                    <p className="mark-text">{herosection.headingsection.marks.marktext3}</p>
                </li>
            </ul>
            <div className="description">
                <Link href={``}>
                   <Button>{herosection.headingsection.description.button}</Button> 
                </Link>
            </div>
        </div>
        <div className="image-section">
            <CarouselPlugin lang={lang} images={images} />
            <div className="benifits flex">
                <div className="benifit">
                    <div className="benifit-text">&#43;150K</div>
                    <div className="benifit-detail">{herosection.imagesection.benifits.benifit1}</div>
                </div>
                <div className="benifit">
                    <div className="benifit-text">&#43;20</div>
                    <div className="benifit-detail">{herosection.imagesection.benifits.benifit2}</div>
                </div>
                <div className="benifit">
                    <div className="benifit-text">&#43;20&#37;</div>
                    <div className="benifit-detail">{herosection.imagesection.benifits.benifit3}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection;