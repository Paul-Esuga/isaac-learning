

type ActivityCardProps = {
    img: string;
    title: string;
    body?: string;
    date: string;
}

const ActivityCard = ( {img, title, body, date}: ActivityCardProps ) => {

    return (
        <div className='flex justify-between items-center bg-[#fff] p-[20px] rounded-[10px] mb-[20px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-[70vw]'>

            <div className='flex gap-[20px] align-center'>
                <img src={img} className='w-[60px] h-[60px] mb-[10px]' alt='heart icon' />
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-[400] text-[20px]'>{title}</h2>
                    <p className='text-[#7f8c8d]'>{body}</p>
                </div>
            </div>

            <p>{date}</p>

        </div>
    )
}

export default ActivityCard;