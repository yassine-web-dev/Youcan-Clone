import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface InnerOneProps {
    lang: string,
    inner1: {
        title: string,
        text: string,
        button: string
    },
}

const InnerOne: React.FunctionComponent<InnerOneProps> = ({ lang, inner1 }) => {

    return (

        <div className="">
            <h3 className="mobile-inner-title text-2xl mt-16 font-semibold text-center md:hidden">{inner1.title}</h3>
            <div className="inner py-4 md:py-28 mt-9 md:mt-0 md:flex md:justify-between md:items-center">
                <div className="inner-img md:w-[48%] lg:w-[46%] bg-[#f9f9f9] rounded-lg py-3 px-5">
                    <Image className="w-full" src={`https://static-portal.youcan.shop/images/new_portal_design/home/setup-store-animation.gif`} width={100} height={100} quality={100} alt="product" />
                </div>
                <div className="inner-desc mt-6 md:w-[48%] lg:w-[46%] text-[#333] text-center md:text-left">
                    <h3 className="inner-title hidden md:block text-3xl font-semibold mb-3">{inner1.title}</h3>
                    <p className="inner-text text-[#555] pb-6 ">{inner1.text}</p>
                    <Button className="bg-transparent font-normal duration-500 text-[15px] hover:bg-[#EDF6F9] text-black border">
                        <Link href={`/${lang}/features`}>{inner1.button}</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InnerOne;