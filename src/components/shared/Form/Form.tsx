import { FormEvent, ReactNode } from 'react'

type Props = {
    submitFunc: () => void;
    children: ReactNode;
}

const Form = ({ submitFunc, children }: Props) => {

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        submitFunc();
    }

  return (
    <form onSubmit={handleSubmit}>
        {children}
    </form>
  )
}

export default Form