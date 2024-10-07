import InnerOne from "./InnerOne"
import InnerThree from "./InnerThree"
import InnerTwo from "./InnerTwo"

interface InnerSectionProps {
    lang: string,
    innersection: {
        inner1: {
          title: string,
          text: string,
          button: string
        },
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
        inner3: {
          title: string,
          text: string,
          button: string
        }
    },
}

const InnerSection: React.FunctionComponent<InnerSectionProps> = ({ lang, innersection }) => {

    return (

        <>
            <InnerOne lang={lang} inner1={innersection.inner1} />
            <InnerTwo lang={lang} inner2={innersection.inner2} />
            {/* <InnerThree lang={lang} inner3={innersection.inner3} /> */}
        </>
    )
}

export default InnerSection;