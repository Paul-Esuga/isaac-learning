// React Hooks
import { useState, useCallback } from 'react';

// Data
import NotificationsData from "../../../static-data/NotificationData";

// Components
import NotificationCard from "../../../components/notifications-card/NotificationCard";
import NotificationInfoPopup from '../popup/NotificationInfoPopup';
import NotificationDeletePopup from '../popup/NotificationDeletePopup';

// Assets
import BackRoundedIcon from '../../../assets/images/notification-images/back-rounded-icon.png';
import DeleteIcon from '../../../assets/images/notification-images/delete-icon.png';
import CloseIcon from '../../../assets/images/Close.png';
const All = () => {

    const [showNotificationInfo, setShowNotificationInfo] = useState(false);
    const [showDeleteNotification, setShowDeletNotification] = useState(false);
    const [getCurrentClickedNotification, setGetCurrentClickedNotification] = useState("");

    const HiddeNotifcationInfo = useCallback((id: string) => {
        setShowNotificationInfo(true);
        setGetCurrentClickedNotification(id)
    }, [])

    const RemoveAll = useCallback(() => {
        setGetCurrentClickedNotification("");
        setShowDeletNotification(false);
        setShowNotificationInfo(false)
    }, [])





    return (
        <div className="overflow-y-scroll">
            {
                NotificationsData.map(data =>
                    <NotificationCard
                        key={data.id}
                        id={data.id}
                        img={data.image}
                        title={data.title}
                        body={data.body}
                        time={data.time}
                        read={data.read}
                        showInfo={HiddeNotifcationInfo}
                    />
                )
            }

            {
                showNotificationInfo && !showDeleteNotification ?
                    <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-[-300px] flex items-center justify-center">
                        <div className="shadow-2xl flex flex-col gap-[24px] w-[30%] m-[auto] bg-[#fff] rounded-[24px] p-[40px]">

                            <div className="flex justify-between items-center">
                                <img src={BackRoundedIcon} onClick={() => setShowNotificationInfo(false)} className='cursor-pointer' />
                                <img src={DeleteIcon} className='cursor-pointer' onClick={() => setShowDeletNotification(true)} />
                            </div>

                            {
                                NotificationsData.filter(item => item.id == getCurrentClickedNotification).map(item =>
                                    <NotificationInfoPopup
                                        id={item.id}
                                        title={item.title}
                                        body={item.body}
                                    />
                                )
                            }
                        </div>
                    </div>
                    : showNotificationInfo && showDeleteNotification ?
                        <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-[-300px] flex items-center justify-center">
                            <div className="shadow-2xl flex flex-col gap-[80px] w-[600px] bg-[#fff] rounded-[24px] p-[40px]">

                                {
                                    NotificationsData.filter(item => item.id == getCurrentClickedNotification).map(item =>

                                        <NotificationDeletePopup
                                            title={item.title}
                                            body={item.body}
                                            removeAll={RemoveAll}
                                        />
                                    )
                                }

                                <button onClick={() => { setGetCurrentClickedNotification(""), setShowDeletNotification(false), setShowNotificationInfo(false) }} className='px-[150px] py-[14px] bg-[#EB000033] text-[#f00] font-[700] rounded-[8px]'>
                                    Delete notification
                                </button>

                            </div>
                        </div>
                        : ""
            }
        </div>
    )
}

export default All;