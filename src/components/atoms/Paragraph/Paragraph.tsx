type PropsParagraph = {text:string}

const Paragraph = ({text}:PropsParagraph) => {
  return (
    <p className="text-sm font-medium font-Roboto_regular">{text}</p>
  )
}

export default Paragraph