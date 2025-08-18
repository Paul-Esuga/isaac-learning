import AppUpdateIcon from '../assets/images/notification-images/App-update-icon.png';
import BestCourse from '../assets/images/notification-images/best-icon.png';
import LessonIcon from '../assets/images/notification-images/lessons-icon.png';


const NotificationsData = [

    {
        id: `1`,
        image: AppUpdateIcon,
        title: `App updates available`,
        body: `New version is now available for download on all store platform. if you haven't yet. then you are missing out. join 30,000 other people to experience the best offers now.`,
        time :`25mins`, 
        read: true
    },

    {
        id: `2`,
        image: BestCourse,
        title: `Best course price is coming`,
        body: `Grab up to 75% off on purchase above 50,000 on a course`,
        time :`Yesterday`,
        read: false
    },

    {
        id: `3`,
        image: LessonIcon,
        title: `What are you doing today. take some lessons`,
        body: `Your courses are there waiting, jump on it now and start learning.`,
        time :`Yesterday`,
        read: false
    }
]

export default NotificationsData