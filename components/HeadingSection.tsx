import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

interface HeadingSectionProps {
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

const mark = "https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg"

const HeadingSection: React.FunctionComponent<HeadingSectionProps> = ({ lang, herosection }) => {

    return (
        <div className="heading-section grid max-w-[700px] text-center md:text-left">
            <h1 className="heading text-[32px] sm:text-[38px] md:text-[34px] lg:text-[42px] xl:text-[48px] leading-[1.2] font-bold">{herosection.headingsection.title}</h1>
            <div className="flex justify-center md:block">
                <p className="sub-heading text-[#444] text-[15px] md:text-base max-w-[500px] mt-4">{herosection.headingsection.subtitle}</p>
            </div>
            <div className="flex justify-center md:block">
                <ul className="marks text-left text-[#555] text-[15px] pt-8">
                    <li className="mark pb-[15px] flex items-center gap-3">
                        <Image src={mark} width={24} height={24} quality={100} alt="Easy store setup" />
                        <p className="mark-text">{herosection.headingsection.marks.marktext1}</p>
                    </li>
                    <li className="mark pb-[15px] flex items-center gap-3">
                        <Image src={mark} width={24} height={24} quality={100} alt="No charge" />
                        <p className="mark-text">{herosection.headingsection.marks.marktext2}</p>
                    </li>
                    <li className="mark pb-[15px] flex items-center gap-3">
                        <Image src={mark} width={24} height={24} quality={100} alt="The only e-commerce platform" />
                        <p className="mark-text">{herosection.headingsection.marks.marktext3}</p>
                    </li>
                </ul>
            </div>
            <div className="description mt-10">
                <Link href={``}>
                   <Button className="w-full sm:max-w-[250px] md:max-w-[164px] h-[52px] text-[15px]">{herosection.headingsection.description.button}</Button> 
                </Link>
            </div>
        </div>
    )
}

export default HeadingSection;