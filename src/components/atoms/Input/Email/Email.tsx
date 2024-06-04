type PropsEmail = {
  label?:string,
  placeholder?:string
}
const Email = ({
  label = "",placeholder = ""
}:PropsEmail) => {
  return (
    <label htmlFor="email" className='text-xs  font-Roboto_bold'>
      {label}
      <input 
        type="email" 
        name="email" 
        placeholder={placeholder}
        className='w-full p-10px pl-4 mt-1 border-2 border-gray-200 rounded-lg font-Roboto_regular font-extralight text-gray-300 text-sm'  
      />
    </label>
  )
}

export default Email