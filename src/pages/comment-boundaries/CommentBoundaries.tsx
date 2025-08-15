// Componenets
import NotificationSettingsCard from "../../components/notification-settings-card/NotificationSettingsCard";

const CommentBoundaries = () => {

    return(
        <div className={`bg-[#f8fcfc] h-screen absolute top-0 left-[0] right-[0] pt-[30px]`}>
            <div className="px-[20px] rounded-[10px] bg-[#fff] w-[90%] m-[auto]">
                <NotificationSettingsCard title="Everyone" body=""/>
                <NotificationSettingsCard title="Only me" body=""/>
            </div>
        </div>
    )
}

export default CommentBoundaries;