interface InnerThreeProps {
    lang: string,
    inner3: {
        title: string,
        text: string,
        button: string
    }
}

const InnerThree: React.FunctionComponent<InnerThreeProps> = ({ lang, inner3 }) => {

    return (

        <div>
            inner3
        </div>
    )
}

export default InnerThree;