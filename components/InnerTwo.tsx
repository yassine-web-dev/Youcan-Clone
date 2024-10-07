import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

interface InnerTwoProps {
    lang: string,
    inner2: {
        desc: {
            title: string,
            text: string,
            button: string
        },
        imgbox: {
            text: {
                txt1: string,
                txt2: string
            }
        }
    },
}

const InnerTwo: React.FunctionComponent<InnerTwoProps> = ({ lang, inner2 }) => {

    return (

        <div className="bg-[#f5f8ff] mx-8 mt-4 py-5 md:py-28 md:mx-0 md:mt-0">
            <div className="container">
                <div className="inner text-center flex flex-wrap gap-4 md:text-left rtl:md:text-right md:flex-nowrap md:justify-between md:items-center md:gap-[100px]">
                    <div className="inner-desc w-full md:w-[45%] text-[#333]">
                        <h3 className="inner-title hidden md:block text-[28px] font-semibold mb-3 w-full">{inner2.desc.title}</h3>
                        <p className="inner-text text-[#555] pb-9 md:pb-6">{inner2.desc.text}</p>
                        <Button className="bg-white font-normal duration-500 text-[15px] hover:bg-[#EDF6F9] text-black border">
                            <Link href={`/${lang}/pricing`}>{inner2.desc.button}</Link>
                        </Button>
                    </div>
                    <div className="inner-img-box w-full gap-[5px] md:w-[55%] flex md:gap-5">
                        <div className="inner-border flex flex-col justify-between px-4 gap-1 w-[40%] bg-white border-[1px] border-[#ebebeb] rounded-md shadow-sm">
                            <div>
                                <span className="icon flex text-[40px] md:text-[56px] font-semibold justify-center mb-2 mt-4">🎉</span>
                                <p className="text-sm md:text-[17px] leading-6 font-semibold text-center">
                                    {inner2.imgbox.text.txt1}
                                    &nbsp;
                                    <span className="sales text-[#335fb8]">{inner2.imgbox.text.txt2}</span>
                                </p>
                            </div>
                            <div className="border-bottom border-b-[1px] border-[#ebebeb]"></div>
                            <div className="chart flex justify-center mb-4">
                                <img className="w-full" src={`https://static-portal.youcan.shop/images/home_page_images_v2/charts.png`} alt="chart" />
                            </div>
                        </div>
                        <img className="w-[60%]" src={`https://static-portal.youcan.shop/images/new_portal_design/home/navigate-illustration-3.webp`} alt="scale" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerTwo;