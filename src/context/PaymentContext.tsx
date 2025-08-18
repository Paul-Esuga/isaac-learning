import { createContext, useState, useContext } from "react";
import CIPM from "../assets/images/payment-images/cipm-logo.png";
import type { ReactNode } from "react";

type PaymentContextType = {
  selectedCourse: {
    image: string;
    title: string;
    description: string;
  }
  setSelectedCourse: React.Dispatch<React.SetStateAction<{
    image: string;
    title: string;
    description: string;
  }>>
  selectedPayment: {
    type: string
    price: string
  }
  setSelectedPayment: React.Dispatch<React.SetStateAction<{
    type: string
    price: string
  }>>
  question: {
    title: string
    body: string
  }
  setQuestion: React.Dispatch<React.SetStateAction<{
    title: string;
    body: string;
  }>>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [selectedCourse, setSelectedCourse] = useState({
    image: CIPM,
    title: 'CIPM HR EXAM',
    description: 'Ace CIPM exam by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
  })
  const [selectedPayment, setSelectedPayment] = useState({
    type: 'Individual',
    price: '₦20,000'
  })
  const [question, setQuestion] = useState({
    title: '',
    body: ''
  })


  return (
    <PaymentContext.Provider value={{ selectedCourse, setSelectedCourse, selectedPayment, setSelectedPayment, question, setQuestion }}>
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) throw new Error("usePayment must be used inside PaymentProvider");
  return context
}