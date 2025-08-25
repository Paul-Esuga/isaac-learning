import ILS from "../../assets/images/dashboard-images/dashboard-modal.png"
import close from "../../assets/images/dashboard-images/modal-close.png"
import { useNavigate } from "react-router-dom"
import CopyLink from "../../assets/images/icons/dashboard-icons/copy-link.png"
import ShareVia from "../../assets/images/icons/dashboard-icons/share-via.png"
import CommunityImg from "../../assets/images/icons/dashboard-icons/community-icon-black.png"

export const ShareNuggetDetails = ({ setIsFormFilled }: { setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate()
  const shareIcons = [
    {
      img: CopyLink,
      text: 'Copy Link'
    },
    {
      img: ShareVia,
      text: 'Share via'
    },
    {
      img: CommunityImg,
      text: 'Community'
    },
  ]
  return (
    <div className="flex flex-col">
      <div className="flex justify-between self-end w-[75%] mb-12">
        <h2 className="text-slate-gray font-bold text-3xl">Share Nugget</h2>
        <img src={close}
          className="cursor-pointer "
          alt="" onClick={() => { setIsFormFilled(false), navigate('/dashboard') }} />

      </div>
      <div className='align-middle justify-between flex rounded-xl'>
        {
          shareIcons.map((share, i) =>
            <div key={i}>
              <img src={share.img} alt="" className='justify-self-center w-[48px] h-[48px] mb-10' />
              <p className="text-slate-gray font-normal text-[18px]">{share.text}</p>
            </div>
          )
        }


      </div>
    </div>
  )
}