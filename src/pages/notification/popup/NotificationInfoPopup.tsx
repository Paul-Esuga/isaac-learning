
type NotificationInfoPopupProps = {
    id: string,
    title: string,
    body: string
}

const NotificationInfoPopup = ( {id, title, body}: NotificationInfoPopupProps ) => {
    return (
        <div key={id} className="flex flex-col gap-[24px]">
            <h2 className="font-[700] text-[20px]">{title}</h2>
            <p className="text-[#414d58]">
                {body}
            </p>
        </div>
    )
}

export default NotificationInfoPopup