

type NotificationCardProps = {
    id: string,
    img: string,
    title: string,
    body: string,
    time: string,
    read: boolean,
    showInfo: (id: string) => void
}

const NotificationCard = ( {id, img, title, body, time, read, showInfo}: NotificationCardProps  ) => {


    return (
        <div className='flex justify-between py-[10px] cursor-pointer' onClick={ () => showInfo(id)}>

            <div className='flex items-center gap-[10px]'>
                <img src={img}/>
                <div>
                    <h2 className='font-[700] text-[20px]'>{title}</h2>
                    <p className='text-[#414d58]'>
                        {body.length >= 64 ? body.slice(0,64) + "..." : body}
                    </p>
                </div>
            </div>

            <p className={` ${read ? "text-primary-green font-[500]" : "text-[#414d58]"} `}>{time}</p>


        </div>
    )
}

export default NotificationCard