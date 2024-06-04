import { typeColorButtons, typeColortextButtons } from "../../../../types"

type PropsButton = {
  value?:string,
  bg?:typeColorButtons,
  hover?:typeColorButtons
  colorText?: typeColortextButtons
  colorTextHover?: typeColortextButtons,
}

const Submit = ({
  value = "",bg,hover,colorText,colorTextHover}:PropsButton) => {
 return (
  <input 
    type="submit" 
    value={value} 
    className={`w-full p-10px mt-4 rounded-lg  ${bg} ${hover} font-Roboto_regular text-sm text-center ${colorText} ${colorTextHover}`} 
  />
 )
}

export default Submit