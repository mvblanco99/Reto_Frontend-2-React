type ProspTitle = {
  level:number,
  title:string
}
const Title = ({level,title}:ProspTitle) => {
  return (
    <>
      {level === 1 && <h1 className='text-4xl  font-Roboto_bold'>{title}</h1>}
      {level === 2 && <h2 className='text-2xl  font-Roboto_bold'>{title}</h2>}
      {level === 3 && <h3 className='text-xl  font-Roboto_bold'>{title}</h3>}
      {(level !== 3 && level !==2 && level !==1) && <h1 className='text-xl font-Roboto_bold'>{title}</h1>}
    </>
  )
}

export default Title