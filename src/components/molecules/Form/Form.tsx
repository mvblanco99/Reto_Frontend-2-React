import { ReactNode } from 'react'
type PropsForm = {children:ReactNode}

const Form = ({children}:PropsForm) => {
  return (
    <form action="" className='mt-2 mb-4 w-full'>
      {children}
    </form>
  )
}

export default Form