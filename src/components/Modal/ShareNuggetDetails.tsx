import ILS from "../../assets/images/dashboard-images/dashboard-modal.png"
import close from "../../assets/images/dashboard-images/modal-close.png"
import { useNavigate } from "react-router-dom"
import CopyLink from "../../assets/images/icons/dashboard-icons/copy-link.png"
import ShareVia from "../../assets/images/icons/dashboard-icons/share-via.png"
import CommunityImg from "../../assets/images/icons/dashboard-icons/community-icon-black.png"
import LinkedinIcn from "../../assets/images/icons/dashboard-icons/linkedin-icon.png"
import GmailIcon from "../../assets/images/icons/dashboard-icons/gmail-icon.png"
import MessageIcon from "../../assets/images/icons/dashboard-icons/message-icon.png"
import MailIcon from "../../assets/images/icons/dashboard-icons/mail-icon.png"


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

  const socialMedia = [
    {
      img: LinkedinIcn,
      text: 'Linkedin'
    },
    {
      img: GmailIcon,
      text: 'Gmail'
    },
    {
      img: MessageIcon,
      text: 'Message'
    },
    {
      img: MailIcon,
      text: 'Mail'
    }
  ]
  return (
    <div className="flex flex-col">
      <div className="flex justify-between self-end w-[75%] mb-12">
        <h2 className="text-slate-gray font-bold text-3xl">Share Nugget</h2>
        <img src={close}
          className="cursor-pointer "
          alt="" onClick={() => { setIsFormFilled(false), navigate('/dashboard') }} />

      </div>
      <div className='align-middle justify-between flex rounded-xl mb-6'>
        {
          shareIcons.map((share) =>
            <div className="w-[72px] h-[80px] flex flex-col mr-2 ">
              <img src={share.img} alt="" className='justify-self-center self-center w-[48px] h-[48px] ' />
              <p className="text-slate-gray text-center font-normal w-[78px] h-[28px] justify-self-center  text-[18px]/7 self-center flex">{share.text}</p>
            </div>
          )
        }
      </div>
      <div className="align-middle justify-between flex rounded-xl">
        {
          socialMedia.map((share) =>
            <div className="w-[72px] h-[80px] flex flex-col ">
              <img src={share.img} alt="" className='justify-self-center self-center w-[48px] h-[48px] ' />
              <p className="text-slate-gray text-center font-normal text-[18px] self-center flex">{share.text}</p>
            </div>
          )
        }
      </div>



    </div>
  )
}