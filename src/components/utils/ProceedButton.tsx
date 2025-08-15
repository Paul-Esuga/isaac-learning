import { useNavigate } from 'react-router-dom'


export const ProceedButton = ({ style, destination }: { style: string, destination: string }) => {
  const navigate = useNavigate()

  return (
    <button
      className={`${style}`}
      onClick={() => { navigate(destination) }}

    >Pay ₦90,000</button>
  )
}