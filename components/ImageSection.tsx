import { CarouselPlugin } from "./CarouselPlugin"

interface ImageSectionProps {
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

const ImageSection: React.FunctionComponent<ImageSectionProps> = ({ lang, herosection }) => {

    return (
        <div className="image-section">
            <CarouselPlugin lang={lang} images={images} />
            <div className="benifits mt-6 grid grid-cols-3 gap-10" dir="ltr">
                <div className="benifit text-center">
                    <div className="benifit-text sm:text-xl font-bold">&#43;150K</div>
                    <div className="benifit-detail text-[15px] text-[#555] pt-1">{herosection.imagesection.benifits.benifit1}</div>
                </div>
                <div className="border-right w-[1px] h-full border-r-[1px] border-[#EBEBEB]"></div>
                <div className="benifit text-center">
                    <div className="benifit-text sm:text-xl font-bold">&#43;20</div>
                    <div className="benifit-detail text-[15px] text-[#555] pt-1">{herosection.imagesection.benifits.benifit2}</div>
                </div>
                <div className="benifit text-center">
                    <div className="benifit-text sm:text-xl font-bold">&#43;20&#37;</div>
                    <div className="benifit-detail text-[15px] text-[#555] pt-1">{herosection.imagesection.benifits.benifit3}</div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;