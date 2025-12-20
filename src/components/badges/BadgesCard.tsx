type BadgesCardProps = {
    image: string,
    body: string
}

const BadgesCard = ( {image, body}: BadgesCardProps ) => {
    return (
        <div className='flex flex-col item-center justify-center w-[94px] px-[18px] '>
            <img src={image} alt="badge" className="w-[50px] h-[50px] mb-4 text-center" />
            <p className='text-[#414d58] max-w-[100px] text-center'>{body}</p>
        </div>
    )
}

export default BadgesCard;