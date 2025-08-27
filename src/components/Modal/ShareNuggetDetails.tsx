import close from "../../assets/images/dashboard-images/modal-close.png"
import { useNavigate } from "react-router-dom"
import shareIcons from "../../static-data/ShareIcons"
import socialMedia from "../../static-data/SocialMedia"
import { useEffect, useState } from "react"
// import { ShareSocial } from "react-share-social"

type NuggetType = {
  setIsFormFilled: React.Dispatch<React.SetStateAction<boolean>>,
  text?: string
}

export const ShareNuggetDetails = ({ setIsFormFilled, text }: NuggetType) => {
  // We can use inline-style
  const style = {
    root: {
      background: 'transparent',
      borderRadius: 40,
      border: 0,
      color: 'white',
      width: 20,
      outerWidth: 20,
      padding: 1,
      // marginRight: -50,
      marginBottom: -15,
      marginLeft: 10

    },
    copyContainer: {
      border: '1px solid blue',
      background: 'rgb(0,0,0,0.7)',
      display: 'none'
    },
  };

  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  async function writeClipboardText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error: any) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  return (
    <div className="flex flex-col pb-4">
      <div className="flex justify-between self-end w-[75%] mb-12">
        <h2 className="text-slate-gray font-bold text-3xl">Share Nugget</h2>
        <img src={close}
          className="cursor-pointer w-[40px] h-[40px]"
          alt="" onClick={() => { setIsFormFilled(false), navigate('/dashboard') }} />

      </div>
      <div className='align-middle justify-between flex rounded-xl mb-6'>
        {
          shareIcons.map((share, i) =>
            <div key={i}>
              <img src={share.img} alt="" className='justify-self-center w-[48px] h-[48px] mb-2 cursor-pointer'
                onClick={() => {
                  i == 0 ? (writeClipboardText(text ?? ''), setCopied(true)) : ''
                }}
              />
              <p className="text-slate-gray font-normal text-[18px] mb-1 transition-all">
                {i == 0 && copied ? 'Link copied' : share.text}
              </p>
            </div>
          )
        }
      </div>
      <div className="align-middle justify-between flex rounded-xl">
        {
          socialMedia.map((share, i) =>
            <div key={i} className="w-[72px] h-[80px] flex flex-col ">
              {/* <img src={share.img} alt="" className='justify-self-center self-center w-[48px] h-[48px] mb-2 cursor-pointer' /> */}
              {/* <ShareSocial url={'Our HR tip for the day: '.concat(text ?? 'Isaac Learning Rocks')} socialTypes={[share.text]}
                style={style}
              /> */}
              <p className="text-slate-gray text-center font-normal text-[18px] self-center flex">{share.text.slice(0, 1).toUpperCase()}{share.text.slice(1)}</p>
            </div>
          )
        }
      </div>



    </div>
  )
}
