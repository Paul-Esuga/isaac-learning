// Componenets
import BackButton from "../back-button/BackButton";
import MockExamNav from "../mock-exam-components/mock-exam-nav/MockExamNav";

// Assets
import SearchIcon from '../../assets/images/icons/Search.png';
import OnlineDot from '../../assets/images/online-dot.png';
import CommunityQuestions from "../../static-data/CommunityQuestions";
import { usePayment } from "../../context/PaymentContext";
import FrancisPFP from '../../assets/images/community-images/francis-pfp.png'

// React Router Hook
import { useLocation, useNavigate } from 'react-router-dom';

// React Hooks
import { useState, useEffect } from 'react';




const NavBar = () => {

    const { question } = usePayment()

    const navigate = useNavigate()

    const { pathname } = useLocation();

    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);


    const username = "John";


    return (
        <>

            <div>
                {currentPath.includes("post-question") ?
                    <nav className="flex justify-between items-center bg-[#ffffff] shadow-md fixed right-0 left-[280px] px-[24px] pt-[32px] pb-[20px]">
                        <div className="flex justify-between  w-[170vh]">
                            <div>
                                <BackButton name="Cancel" />
                            </div>
                            <button className="bg-primary-green text-warm-white font-[500] text-base p-2.5 rounded-[10px] h-[44px]"
                                onClick={() => {
                                    navigate('community')
                                    CommunityQuestions.push({
                                        id: String(parseInt(CommunityQuestions[CommunityQuestions.length - 1].id) + 1),
                                        img: FrancisPFP,
                                        name: "Francis Adeleke",
                                        time: "3h ago",
                                        title: question.title,
                                        body: question.body,
                                        like_count: "1.1k",
                                        comment_count: "225",
                                        isBookmarked: false,
                                        comments: []
                                    })
                                }}
                            >Send Post</button>
                        </div>
                    </nav> :

                    <nav className="flex justify-between items-center bg-[#ffffff] shadow-md fixed right-0 left-[280px] px-[24px] pt-[32px] pb-[20px]">
                        <div>
                            {currentPath.includes("personal-details") ||
                                currentPath.includes("notification-settings") ||
                                currentPath.includes("privacy") ||
                                currentPath.includes("help") ||
                                currentPath.includes("account-management") ||
                                currentPath.includes("view-comment") ||
                                currentPath.includes("cipm-mock-exam") ||
                                currentPath.includes('view-results')|| 
                                currentPath.includes("mock-exam-review") ||
                                currentPath.includes("start-quiz") ?
                                <BackButton />
                                : <h1 className="font-bold text-[20px]">Welcome back, {username}</h1>}
                        </div>

                        {
                            currentPath.includes("cipm-mock-exam") ?
                                <MockExamNav />
                                :
                                <div className="flex align-center gap-[20px]">

                                    <div className="flex gap-[8px] border-[1px] border-[#999999] px-[16px] py-[12px] rounded-[100px] w-[300px]">
                                        <img src={SearchIcon} alt="search icon" />
                                        <input type='search' placeholder="search here" className="text-[#99999] border-none outline-none" />
                                    </div>

                                    <div className="flex flex-col gap-[4px]">
                                        <h3 className="font-[400] text-[20px]">Wednesday, May 21, 2025</h3>
                                        <p className="text-[#7f8c8d]">10:45am</p>
                                    </div>

                                    <div className="flex items-center gap-[10px]">

                                        <div className="rounded-[50%] bg-[#999999] pt-[13px] pl-[16px] w-[50px] h-[50px]">
                                            <p className="font-[700] text-[#fff]">JA</p>
                                        </div>

                                        <div className="flex-col">
                                            <h3 className="font-[400] text-[20px]">John Adekola</h3>

                                            <div className="flex">
                                                <p>Online </p>
                                                <img src={OnlineDot} className="w-[10px] h-[10px]" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        }
                    </nav>


                }
            </div>

        </>
    )
}

export default NavBar;