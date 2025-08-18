
// Data
import CloseIcon from '../../../assets/images/Close.png';

type NotificationDeletePopupProps = {
    title: string,
    body: string,
    removeAll: () => void
}

const NotificationDeletePopup = ( {title, body, removeAll}: NotificationDeletePopupProps  ) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            <div className='flex justify-between items-center'>
                <h2 className="font-[700] text-[20px]">{title}</h2>
                <img src={CloseIcon} className='cursor-pointer' onClick={removeAll} />
            </div>
            <p className="text-[#414d58]">
                {body}
            </p>
        </div>
    )
}

export default NotificationDeletePopup