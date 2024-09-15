interface FeaturesSectionProps {
    lang: string,
    featuressection: {
        title: string,
        features: {
          feature1: string,
          feature2: string,
          feature3: string,
          feature4: string
        }
    }
}

const featuresImgs = [
    "https://static-portal.youcan.shop/images/home_page_images_v2/feature-1.svg",
    "https://static-portal.youcan.shop/images/home_page_images_v2/feature-2.svg",
    "https://static-portal.youcan.shop/images/home_page_images_v2/feature-3.svg",
    "https://static-portal.youcan.shop/images/home_page_images_v2/feature-4.svg",
]

const FeaturesSection: React.FunctionComponent<FeaturesSectionProps> = ({ lang, featuressection }) => {

    return (

        <>
            <div className="section-heading-features pt-[60px] text-primary text-2xl">
                <h2 className="title">{featuressection.title}</h2>
            </div>
            <div className="features grid md:grid-cols-2 justify-self-center lg:grid-cols-4 gap-5 pt-7 px-10 pb-16 text-[#555]">
                <div className="feature grid bg-white rounded-md py-7 px-[50px] shadow-md lg:shadow-lg">
                    <img className="justify-self-center" src={featuresImgs[0]} alt="setup store" />
                    <p className="feature-desc pt-8">1&#46; {featuressection.features.feature1}</p>
                </div>
                <div className="feature grid bg-white rounded-md py-7 px-[50px] shadow-md lg:shadow-lg">
                    <img className="justify-self-center" src={featuresImgs[1]} alt="list products" />
                    <p className="feature-desc pt-[28px]">2&#46; {featuressection.features.feature2}</p>
                </div>
                <div className="feature grid bg-white rounded-md py-7 px-[50px] shadow-md lg:shadow-lg">
                    <img className="justify-self-center" src={featuresImgs[2]} alt="traffic" />
                    <p className="feature-desc pt-8">3&#46; {featuressection.features.feature3}</p>
                </div>
                <div className="feature grid bg-white rounded-md py-7 px-[50px] shadow-md lg:shadow-lg">
                    <img className="justify-self-center" src={featuresImgs[3]} alt="get paid" />
                    <p className="feature-desc pt-10">4&#46; {featuressection.features.feature4}</p>
                </div>
            </div>
        </>
    )
}

export default FeaturesSection;