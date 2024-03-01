import { Locale } from '@/i18n.config';
import { getDictionary } from "@/lib/dictionary";
import NavbarHelper from './NavbarHelper';

interface NavbarProps {
    lang: Locale
}

const Navbar: React.FunctionComponent<NavbarProps> = async ({ lang }) => {

    const { navbar, nav } = await getDictionary(lang)

    return (
        <NavbarHelper lang={lang} navbar={navbar} nav={nav} />
    )
}

export default Navbar;