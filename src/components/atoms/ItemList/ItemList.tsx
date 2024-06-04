import Icon from "../Icon/Icon"
import Paragraph from "../Paragraph/Paragraph"

type PropsItemList = {
  text?:string,
  icon?:string
}

const ItemList = ({
  text="",
  icon=""
}:PropsItemList) => {
  return (
    <li className='flex gap-x-3'>{icon && <Icon url={icon}/>}<Paragraph text={text}/></li>
  )
}

export default ItemList