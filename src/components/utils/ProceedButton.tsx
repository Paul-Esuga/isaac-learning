import { useNavigate } from 'react-router-dom'


type ProceedButtonProps = {
  style: string,
  destination?: string,
  value: string,
  func?: () => void
}

export const ProceedButton = ({ style, destination, value, func }: ProceedButtonProps) => {
  const navigate = useNavigate()

  return (
    <button
      className={`${style}`}
      onClick={() => { destination ? navigate(destination) : func}}

    >{value}</button>
  )
}