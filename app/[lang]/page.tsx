import FeaturesSection from '@/components/FeaturesSection'
import HeadingSection from '@/components/HeadingSection'
import ImageSection from '@/components/ImageSection'
import InnerSection from '@/components/InnerSection'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({ 
    params: { lang } 
}: {
    params: { lang: Locale }
}) {

    const { main } = await getDictionary(lang)

    return (
        <main className="py-32">
            <div className="container">
                <section className="hero-section md:flex justify-between md:gap-20 text-[#333]">
                    <HeadingSection lang={lang} herosection={main.herosection} />
                    <ImageSection lang={lang} herosection={main.herosection} />
                </section>
                <section className="features-section text-center bg-[#FFF5FB] mt-24 rounded-2xl">
                    <FeaturesSection lang={lang} featuressection={main.featuressection} />
                </section>
                <section className="inner-section">
                    <InnerSection lang={lang} innersection={main.innersection} />
                </section>
                <section className="faq-accordination"></section>
            </div>
        </main>
    )

}