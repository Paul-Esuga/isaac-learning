
// Assets
import BookImage from '../../assets/images/quiz-images/book.png';
import QuizQuestionImage from '../../assets/images/quiz-images/quiz-questions.png';
import QuizClock from '../../assets/images/quiz-images/quiz-clock.png';
import QuizCompletors from '../../assets/images/quiz-images/quiz-completors.png';

// Componenets
import { ProceedButton } from '../utils/ProceedButton';

export  enum category_value {
    Tertiary = "Tertiary",
    Secondary = "Secondary",
    Foundational = "Foundational"
}

type QuizCardProps = {
    id: string, 
    title: string,
    category: category_value.Foundational | category_value.Secondary | category_value.Tertiary,
    topic: string,
    questionCount: string,
    quizDuration: string,
    completors: string
}

const QuizCard = ({id, title, category, topic, questionCount, quizDuration, completors }: QuizCardProps) => {
    return (
        <div className='bg-[#fff] flex items-center flex-wrap justify-between gap-[20px] px-[10px] py-[20px] rounded-[8px] w-[100%]'>

            <div className='flex gap-[12px] items-center'>

                <img src={BookImage} className='h-[50px]' />

                <div className='flex flex-col gap-[16px]'>

                    <div>
                        <div className='flex gap-[16px]'>
                            <h2 className='text-primary-green'>{title}</h2>
                            <p className={`${category == "Foundational" ? "bg-primary-green" : category == "Secondary" ? "bg-[#5DADE2]" : "bg-[#B29600]"} text-[#fff] rounded-[100px] px-[20px] py-[2px]`}>
                                {category}
                            </p>
                        </div>

                        <p className='text-primary-green'>{topic}</p>
                    </div>

                    <div className='flex gap-[12px]'>

                        <div className='flex items-center gap-[8px]'>
                            <img src={QuizQuestionImage} className='w-[15px] h-[15px]'/>
                            <p className='text-[#999999]'>{questionCount} questions</p>
                        </div>

                        <div className='flex items-center gap-[8px]'>
                            <img src={QuizClock} className='w-[15px] h-[15px]'/>
                            <p className='text-[#999999]'>{quizDuration} min</p>
                        </div>

                        <div className='flex items-center gap-[8px]'>
                            <img src={QuizCompletors} className='w-[15px] h-[15px]'/>
                            <p className='text-[#999999]'>{completors} completors</p>
                        </div>

                    </div>

                </div>

            </div>

            <ProceedButton style="bg-primary-green font-[700] px-[15px] py-[10px] text-[#fff] rounded-[8px]" destination={`/dashboard/quiz/start-quiz/${id}`} value='Take quiz' />

        </div>
    )
}

export default QuizCard