type ProgressCardProps = {
    image?: string,
    title: string,
    body: string, 
}

const ProgressCard = ( {image, title, body}: ProgressCardProps ) => {

    return (
        <div className={ image ? "bg-[#f5f5f5] flex p-[20px] rounded-[10px] flex-col w-[290px] mb-[20px]" : "flex p-[20px] mb-[20px] rounded-[10px] flex-col w-[290px]"}>
            {
                image ? <img src={image} alt="book" className="w-[50px] h-[50px] mx-auto mt-[20px] mb-[20px]" /> : <div className='w-[50px] h-[50px] mx-auto mt-[20px] mb-[20px]'></div>
            }
            <h2 className="font-[700] text-center mb-[4px] text-[20px]">{title}</h2>
            <p className="text-[#414d58] text-center">{body}</p>
        </div>
    )
}

export default ProgressCard