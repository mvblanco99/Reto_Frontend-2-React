type PropsIcon = {
  url:string
}

const Icon = ({url}:PropsIcon) => {
  return (
    <img src={url} alt="" />
  )
}

export default Icon