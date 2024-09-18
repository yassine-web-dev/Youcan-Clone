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

        <div>
            inner2
        </div>
    )
}

export default InnerTwo;