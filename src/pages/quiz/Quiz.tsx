// React Router Hooks
import {Outlet } from 'react-router-dom';

// React Hooks
import { useState } from 'react';

// Componenets
import QuizCard from '../../components/quiz-componenets/QuizCard';

// Assets
import FilterIcon from '../../assets/images/quiz-images/filter-icon.png';
import DropUpIcon from '../../assets/images/quiz-images/dropup-icon.png';
import DropDownIcon from '../../assets/images/quiz-images/dropdown-icon.png';

// Data
import QuizData from '../../static-data/QuizData';

const CategoriesList = ["All Categories", "Foundational", "Secondary", "Tertiary"]

const Quiz = () => {

    document.title = "Dashboard | Quiz";

    const [showCategories, setShowCategories] = useState(false);

    const [categories, setCategories] = useState(CategoriesList[0]);

    const Data = categories == "All Categories" ? QuizData 
    : categories == "Foundational" ? QuizData.filter(data => data.category == "Foundational") 
    : categories == "Secondary" ? QuizData.filter(data => data.category == "Secondary")
    : categories == "Tertiary" ? QuizData.filter(data => data.category == "Tertiary") : QuizData

    return (
        <div className="bg-[#FAFAFA] w-[100%] h-screen  px-[30px] py-[40px]">

            <div className="bg-primary-green flex flex-col gap-[30px] w-[100%] rounded-[10px] px-[30px] py-[20px]">

                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <p className="text-warm-white mb-[5px]">All Quizzes</p>
                        <div className="bg-[#fff] h-[2px] w-[100px]" />
                    </div>

                    <div className='relative'>
                        <div className='bg-[#fff] flex items-center gap-[18px]  px-[12px] py-[10px] rounded-[10px]'>

                            <div className='flex items-center gap-[8px]'>
                                <img src={FilterIcon} />
                                <p className='text-primary-green font-[600]'>{categories}</p>
                            </div>

                            <img src={showCategories ? DropUpIcon : DropDownIcon} className='cursor-pointer' width={25} height={30} onClick={() => setShowCategories(prev => !prev)}/>
                        </div>

                        {
                            showCategories && <div className='bg-[#fff] rounded-[10px] p-[10px] text-primary-green absolute left-0 right-0 top-[50px] border-[1px]'>
                                {
                                    CategoriesList.filter(cat => cat != categories).map((cat, i) =>
                                        <p key={i} className='cursor-pointer mb-[10px] border-b-[1px] border-b-primary-green' onClick={() => {setCategories(cat), setShowCategories(false)}}>
                                            {cat}
                                        </p>
                                    )
                                }
                            </div>
                        }
                    </div>

                </div>

                <div className='flex flex-col gap-[24px] overflow-scroll h-[600px] py-[10px]'>
                    {
                        Data.map((data, i) => 
                        <QuizCard 
                        key={i} 
                        id={data.id} 
                        title={data.title}
                        category={data.category}
                        topic={data.topic}
                        questionCount={data.questionCount}
                        quizDuration={data.quizDuration}
                        completors={data.completors}
                        />)
                    }
                </div>

                <Outlet/>


            </div>
        </div>
    )
}

export default Quiz;
