import ItemList from "../../atoms/ItemList/ItemList"

type PropsList = {
  info: {text?:string, icon?:string}[]
}

const List = ({info}:PropsList) => {
  return (
    <ul className="flex flex-col gap-y-3 w-full mt-2">
        {
          info?.map((item,key) => <ItemList key={key} text={item.text} icon={item.icon}/>)
        }
    </ul>
  )
}

export default List