import HeroSection from '@/components/HeroSection'
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
                <section className="hero-section flex text-[#333]">
                    <HeroSection lang={lang} herosection={main.herosection} />
                </section>
                <section className="features-section"></section>
                <section className="inner-section"></section>
                <section className="faq-accordination"></section>
            </div>
        </main>
    )

}