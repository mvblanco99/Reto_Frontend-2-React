import { typeColorButtons, typeColortextButtons } from "../../../types"

type PropsButton = {
  value:string,
  bg:typeColorButtons,
  hover:typeColorButtons
  colorText: typeColortextButtons
  colorTextHover: typeColortextButtons,
}
const Button = ({value, bg, hover, colorText, colorTextHover}:PropsButton) => {
  
  return (
    <button
      className={`w-full p-10px mt-4 rounded-lg ${bg} ${hover} font-Roboto_regular text-sm text-center ${colorText} ${colorTextHover}`} 
    >{value}</button>
  )
}

export default Button