import {useState, createContext, useEffect } from 'react';

type questionsType = {
    questionIndex: number,
    optionChosen: string
}

type MockExamContextType = {
    clicked_questions_list: number[] ,
    setClicked_questions_list: React.Dispatch<React.SetStateAction<number[]>>
    questionIndex: number,
    setQuestionIndex: React.Dispatch<React.SetStateAction<number>>
    doneQuestions: questionsType[],
    setDoneQuestions: React.Dispatch<React.SetStateAction<questionsType[]>>
}


export const MockExamContext = createContext<MockExamContextType | undefined>(undefined);

type MockExamContextApiProps = {
    children: React.ReactNode
}

const MockExamContextApi = ( {children}: MockExamContextApiProps ) => {

       const [clicked_questions_list, setClicked_questions_list] = useState<number[]>([])

       const [questionIndex, setQuestionIndex] = useState(0);

       const [doneQuestions, setDoneQuestions] = useState<questionsType[]>([])

       useEffect(() => {}, [])

    return (
        <MockExamContext.Provider value={{clicked_questions_list, setClicked_questions_list, questionIndex, setQuestionIndex, doneQuestions, setDoneQuestions}}>
            {children}
        </MockExamContext.Provider>
    )
}

export default MockExamContextApi